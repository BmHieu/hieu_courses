const Course = require ('../models/Course')
const {mutipleMongooseToObject} = require ('../../util/mongoose')

class SiteController {
    //[GET] /home
    index(req, res,next){
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
                
            .catch(next)
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses)
        //     else next(err)
        // })
        // res.render('home')
    }

    //[GET]  /search
    search(req, res){
        res.render ('search')
    }
    //[GET] /contact
    contact(req, res){
        res.render('contact')
    }

}
module.exports = new SiteController