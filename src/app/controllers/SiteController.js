const Course = require ('../models/Course')


class SiteController {
    //[GET] /home
    index(req, res){
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses)
            else res.status(400).json({error: 'ERROR!!!'})
        })
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