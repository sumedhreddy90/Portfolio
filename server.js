//imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const portfolio = require('./routes/portfolio')
//static files
app.use('/', express.static('public'))
// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')
//Navigation
// app.use('/portfolio'/ portfolio)
app.get('/',(req, res)=>{
    res.render('index')
})
app.listen(port, () => console.info('App listening on port ${port}'))