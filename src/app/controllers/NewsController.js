class NewsController{
    //GET:: news
    index(req, res){
        res.render('news');
    }

    // GET/news/:slug
    show(req, res){
        res.send("A New website of NEWS");
    }
}

module.exports = new NewsController;