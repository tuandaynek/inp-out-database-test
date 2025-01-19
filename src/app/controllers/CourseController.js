const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/mongoose.js');
const {mongooseToObject} = require('../../util/mongoose.js');

class CourseController {

    //GET[] courses/:slug
    show(req, res, next){
        // res.send(req.params.slug);
        Course.findOne({slug: req.params.slug})
            .then((course)=>{
                // res.json(course);
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
    }
    create(req, res, next){
        // res.send('create courses page');
        res.render('courses/create');
    }

    //POST[] courses/store
    store(req, res, next) {
        // console.log('Headers:', req.headers);  // Kiểm tra headers
        // console.log('Body:', req.body);       // Kiểm tra dữ liệu từ body
        // res.send('Dữ liệu đã được gửi');
        const formData = req.body;
        if(formData.thumbnailUrl=='') formData.thumbnail = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        else formData.thumbnail = formData.thumbnailUrl;
        const course = new Course(formData);
        course.save()
            .then(()=>res.redirect(`/`))
            .catch(error =>{

            });
    }
    
}

module.exports = new CourseController();
