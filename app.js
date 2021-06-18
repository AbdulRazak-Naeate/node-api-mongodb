const express = require ('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();

 
//Import Routes
const postsRoute = require('./routes/posts');

//MiddleWare
app.use(bodyParser.json());


app.use('/posts',postsRoute);


//ROUTES
 app.get('/',(reg,res)=>{
     res.send('We are on home')
 })


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true }, { useNewUrlParser: true } , ()=>{
    console.log('connected to DB!')
})
//Start lestening to the server

app.listen(3000);