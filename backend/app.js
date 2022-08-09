const express = require('express');
const app = express();
const cors = require('cors');

// Accès au corps de la req
app.use(express.json());

// Pour éviter les erreurs CORS
app.use(cors());

// Ajout des headers à l'objet réponse
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

module.exports = app;
