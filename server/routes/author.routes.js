const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}