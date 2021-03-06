const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const Post = require('../models/Post');

//Gets all post 
router.get('/', async(req,res)=>{
  try{
       const posts =await Post.find();
       res.json(posts);
  }catch(err){
      res.json({message:err})
  }

});
//Submit a post
router.post('/',async (req,res)=>{
    const post= new Post({
        title:req.body.title,
        description:req.body.description
    });
     try{
     const savePost=  await post.save();
   
        res.json(savePost);

    }catch(err){
       res.json({messgae:err})
    }
});
   //get Specific post

   router.get('/:postId',async (req,res)=>{
       try{
       const post = await Post.findById(req.params.postId);
       res.json(post);
       }catch(err){
           res.json({message:err});
       }
   })

   //delete a specific post

   router.delete('/:postId',async (req,res)=>{
    try {const removePost=await Post.remove({_id:req.params.postId});
    res.json(removePost);
   }catch(err){
   res.json({message:err});
   }
   })

   //Update post
   router.patch('/:postId', async (req,res)=>{
       try{
         const updatedPost = await Post.updateOne(
               {_id: req.params.postId},
              {$set:{title: req.body.title}}
              
              );
           res.json(updatedPost)
       }catch(err){
           res.json({messgage:err});
       }
   })
module.exports = router;