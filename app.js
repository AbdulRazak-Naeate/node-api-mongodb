const express = require ('express');

const app = express();

//ROUTES
 app.get('/',(reg,res)=>{
     res.send('We are on home')
 })

//Start lestening to the server

app.listen(3000);