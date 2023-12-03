const Store = require('../models/Store');
const Product = require('../models/Product');

class StoreController {
    read(req, res, next) {
        Store.find({})
            .then(store => res.json(store))
            .catch(error => next(error));
    }
    async update(req, res, next) {
    try {
        const  id  = req.params.id; 
        const newPrice = req.body;
        const updatedPrice = await Store.findOneAndUpdate(
            { _id: id },
            { giaBan: newPrice.giaBan },
            { new: true } 
        );

        if (!updatedPrice) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Price updated successfully', updatedPrice });
        } catch (error) {
            console.error('Error updating data in MongoDB:', error);
            res.status(500).json({ error: 'Failed to update data in MongoDB' });
        }
    }
     async add(req, res, next) {
        try {
            const newStoreData = req.body;
            const newStoreProduct = new Store(newStoreData);
            const product = await Product.findById({_id: newStoreData.id});
            
            if (product) {
                // Kiểm tra số lượng có đủ để giảm không
                if (product.slKho >= newStoreData.soLuong) {
                    // Giảm số lượng sản phẩm trong kho
                    product.slKho -= newStoreData.soLuong;
                    await product.save();
                } else {
                    return res.status(400).json({ error: 'Số lượng sản phẩm không đủ trong kho' });
                }
            } else {
                return res.status(404).json({ error: 'Không tìm thấy sản phẩm trong kho' });
            }

            const existingProduct = await Store.findOne({ tenSP: newStoreData.tenSP });
            if (existingProduct) {
                // Nếu sản phẩm đã tồn tại, cộng thêm số lượng vào sản phẩm đó trong cửa hàng
                existingProduct.soLuong += parseInt(newStoreData.soLuong);
                await existingProduct.save();
                res.status(200).json({ message: 'Sản phẩm đã tồn tại trong cửa hàng, cập nhật số lượng thành công' });
            }
            else{
                 await newStoreProduct.save();
                  res.status(201).json({ message: 'Thêm cửa hàng mới thành công', newStoreProduct });
            }
        } catch (error) {
            console.error('Error saving data to MongoDB:', error);
            res.status(500).json({ error: 'Failed to save data to MongoDB' });
        }
    }


    async delete(req,res,next){
        try {
            const id = req.params.id;

            const storeProduct = await Store.findById({_id:id});

            if (!storeProduct) {
            return res.status(404).json({ error: 'Product not found in store' });
            }

            const productId = storeProduct.productId;
            const quantity = storeProduct.quantity;

            const product = await Product.findById(productId);

            if (!product) {
            return res.status(404).json({ error: 'Product not found in inventory' });
            }

            // Cộng số lượng vào kho
            product.quantity += quantity;
            await product.save();

            await Store.findByIdAndDelete(id);

            res.json({ message: 'Product removed from store and inventory updated' });
        } catch (error) {
            console.error('Error deleting product from store:', error);
            res.status(500).json({ error: 'Failed to delete product from store' });
        }
    }
}

module.exports = new StoreController();
