const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/mongoose.js');

class SiteController {

    home(req, res, next){
        Course.find({})
            .then(courses=>{
                res.render('home', {courses:multipleMongooseToObject(courses)});
            })
            .catch(next);
    }

    // GET:: search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
