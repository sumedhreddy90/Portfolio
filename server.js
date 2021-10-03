const express = require('express')
const portfolio = require('./routes/portfolio')
const app = express()

app.set('view engine', 'ejs')
// app.use('/portfolio'/ portfolio)
app.get('/',(req, res)=>{
    res.render('index')
})
app.listen(7000)