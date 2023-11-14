const siteRouter = require('./site')
const receiptRouter = require('./receipt')


function route(app){
    
    app.use('/',siteRouter);
    app.use('/receipt',receiptRouter);
    
}

module.exports = route;