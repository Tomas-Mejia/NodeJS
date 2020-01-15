const mongoose = require('mongoose');
const postModel = require('../models/postModels');
const Post = mongoose.model('Post');

exports.list_all_posts = (req,res) => {
    Post.find({},(error, posts) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json(posts);
        }
    })
}

exports.create_a_post = (req,res) => {
    let {body} = req;
    let new_post = new Post(body);

    new_post.save((error,posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(201);
            res.json(posts);
        }
    })
}

exports.get_a_post = (req,res) => {
    Post.findById(req.params.id,(error, posts) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json(posts);
        }
    })
}

exports.update_a_post = (req,res) => {
    Post.findOneAndUpdate(req.params.id, req.id,{new : true},(error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json(posts);
        }
    })
}

exports.delete_a_post = (req,res) => {
    Post.findByIdAndRemove(req.params.id,(error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json({message: "Article supprimé."});
        }
    })
}
