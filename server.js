//imports
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// ! connect to mongodb database
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
// middleware
app.use(express.urlencoded({extented: true}))
//static files
app.use('/', express.static('public'))
app.use(express.static(__dirname + ''));
// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

const port = process.env.PORT || 5000
const portfolio = require('./routes/portfolio')

//Navigation
// app.use('/portfolio'/ portfolio)
app.get('/',(req, res)=>{
    res.render('index')
})
app.listen(port, () => console.info('App listening on port ${port}'))