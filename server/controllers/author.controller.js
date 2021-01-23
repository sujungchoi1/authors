const mongoose = require("mongoose");
const { Author } = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    // const { name } = req.body;
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllAuthors = (req, res) => {
    //.sort is case-sensitive
    Author.find().sort("name")
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
}

// module.exports.findAllAuthor = (req, res) => {
//     favAuthor.find().sort({firstName: "asc"})

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
    // console.log("from findOneandUpdate")
    //set the new option to true to return the updateAuthor after the updated is applied to req.body.
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)});
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deleteAuthor => res.json(deleteAuthor))
        .catch(err => res.status(400).json(err));
}
