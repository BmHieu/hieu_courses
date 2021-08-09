const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

const route = require ('./routes')
const db = require('./config/db')


//Connect to db
db.connect()

//HTTT logger
app.use(morgan('combined'))

//use CSS
app.use(express.static(path.join(__dirname,'public')))


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


//Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources','views'))

// route app
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})