const dotenv = require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const viewRouter = require('./src/routes/viewRouter');
const app = express();
const PORT = process.env.PORT || 5000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", viewRouter);


// Set Templating Engine
app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')



app.listen(PORT, () =>{
    console.log(`Server Started on Port ${PORT}`)
})