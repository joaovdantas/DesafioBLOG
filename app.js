require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

//conectando db
const connectDB = require('./server/config/db');

//aplicando função db no app 
connectDB();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT,()=> {
    console.log(`App listening on port ${PORT}`);
});
