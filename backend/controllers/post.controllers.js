const Post = require('../models/post.models');
const User = require('../models/user.models');

// Récupérer un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
  .then((post) => {
    if(!post) return res.status(404).json({ error: "Post not found!" });
    res.status(200).json(post);
  })
  .catch((error) => res.status(500).json({ error: 'Server Error!' }));
};
