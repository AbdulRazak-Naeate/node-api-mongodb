const express = require ('express');

const app = express();
//MiddleWares
app.use('/post',()=>{
   // console.log('This is middleware running');
}) 

//ROUTES
 app.get('/',(reg,res)=>{
     res.send('We are on home')
 })

 app.get('/post',(reg,res)=>{
    res.send('We are on post')
})

//Start lestening to the server

app.listen(3000);