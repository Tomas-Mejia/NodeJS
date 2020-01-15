const mongoose = require('mongoose');
const commentModel = require('../models/commentModels');
const Comment = mongoose.model('Comment');

exports.get_all_comments = (req,res) => {
    Comment.findById(req.params.post_id,(error, posts) => {
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

exports.create_a_comment = (req,res) => {
    let {body} = req;
    let new_comment = new Comment(body);
    new_comment.post_id = req.params.post_id;

    new_comment.save((error,posts) => {
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

exports.get_a_comment = (req,res) => {
    Comment.findById(req.params.comment_id,(error, posts) => {
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

exports.update_a_comment = (req,res) => {
    Comment.findOneAndUpdate(req.params.comment_id, req.post_id,{new : true},(error, posts) => {
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

exports.delete_a_comment = (req,res) => {
    Comment.findByIdAndRemove(req.params.comment_id,(error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json({message: "Commentaire supprimé."});
        }
    })
}
