const StockIn = require('../models/StockIn')

class StockInController{
    index(req,res){
        res.send('Nhập kho');
    }

    async add(req,res){
        try{
            const formData = req.body;
            const newData = new StockIn(formData);
            res.json(formData);
            await newData.save();
        }
        catch(error){
            console.error('Error saving data to MongoDB:', error);
        }
    }

    read(req,res,next){
        StockIn.find({})
            .then(stockIn => res.json(stockIn))
            .then(error => next(error));
        
    }
    async update(req, res, next) {

        try {
            const  id  = req.params.id; 
            const { note } = req.body;
            const acceptedStockIn = await StockIn.findByIdAndUpdate(
                {_id : id},
                { state: (note==='accept')?'Đã duyệt' :'Không được duyệt'}, 
                { new: true } 
            );

            if (!acceptedStockIn) {
                return res.status(404).json({ message: 'Không tìm thấy phiếu nhập' });
            }

            res.json(acceptedStockIn); 
        } catch (error) {
            console.error('Error accepting stock in:', error);
            next(error);
        }
    }

}

module.exports = new StockInController();