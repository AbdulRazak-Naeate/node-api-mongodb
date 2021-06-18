# node-api-mongodb
node api with mongo database 
Using Mongo AtLas 
you can access the api from a browser by using the following code

fetch('http://localhost:3000/posts/').then(result => {
  return result.json();
    
}).then( data => {
  console.log(data)
});
