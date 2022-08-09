const User = require('../models/user.models');
require('dotenv').config();

// Récupérer un user
exports.getOneUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
  .then((user) => {
    if (!user) return res.status(404).json({ error: 'User not found!' });
    res.status(200).json({
      userId: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      isAdmin: user.isAdmin,
      imageUrl: user.imageUrl,
      createdAt: user.createdAt,
    });
  })
  .catch((error) => res.status(500).json({ error: 'Server Error!' }));
};
