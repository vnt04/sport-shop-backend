

class SiteController{
    home(req,res){
        //res.render('home');
        res.send('home');
    }
}


module.exports = new SiteController();
