const Sequelize = require("sequelize");
require('dotenv').config();

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuration pour la connexion à la base de données
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost',
  }
);

// Connexion à la base de donnée
db.sync()
  .then(console.log('Connected to the Database!'))
  .catch((error) => console.log(error));

module.exports = sequelize;
