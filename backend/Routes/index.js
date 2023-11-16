const siteRouter = require('./site')
const receiptRouter = require('./receipt')
const supplierRouter = require('./supplier')
const userRouter = require('./user')
const categoryRouter = require('./category')
const unitRouter = require('./unit')
const productRouter = require('./product')

function route(app){
    
   
    app.use('/receipt',receiptRouter);
    app.use('/supplier',supplierRouter); 
    app.use('/',siteRouter);
    app.use('/user',userRouter);
    app.use('/category',categoryRouter);
    app.use('/unit',unitRouter);
    app.use('/product', productRouter);
    
}

module.exports = route;