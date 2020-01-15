const postControleur = require('../controleur/postControleur');

module.exports = (app) => {
    app.route('/posts')
    .get(postControleur.list_all_posts)
    .post(postControleur.create_a_post);

    app.route('/posts/:id')
    .get(postControleur.get_a_post)
    .post(postControleur.update_a_post)
    .delete(postControleur.delete_a_post); 
}