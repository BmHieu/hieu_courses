const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    //[GET]  /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([courses, countDeleted]) => res.render('me/stored-courses', {
                countDeleted,
                courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next)
    }

    //[GET] /recycle/courses/
    showrecycle(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/recycle-courses', {
                courses: mutipleMongooseToObject(courses)
            })
            )
            .catch(next)
    }

}
module.exports = new MeController