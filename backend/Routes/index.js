const siteRouter = require('./site')
const receiptRouter = require('./receipt')
const supplierRouter = require('./supplier')
const userRouter = require('./user')
const categoryRouter = require('./category')
const unitRouter = require('./unit')
const productRouter = require('./product')
const stockInRouter = require('./stockIn')
const loginRouter = require('./login')
const orderRouter = require('./order')
const storeRouter = require('./store')
const stockOutRouter = require('./stockOut')
function route(app){
    
   
    app.use('/receipt',receiptRouter);
    app.use('/supplier',supplierRouter); 
    app.use('/',siteRouter);
    app.use('/user',userRouter);
    app.use('/category',categoryRouter);
    app.use('/unit',unitRouter);
    app.use('/product', productRouter);
    app.use('/stockIn',stockInRouter);
    app.use('/login',loginRouter);
    app.use('/order',orderRouter);
    app.use('/store',storeRouter);
    app.use('/stockOut',stockOutRouter);
}

module.exports = route;