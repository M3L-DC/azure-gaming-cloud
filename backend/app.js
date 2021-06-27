const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Requete bien recu !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requete a bien été recu !' });
  next();
});

app.use((req, res) => {
  console.log('Réponse envoyé avec succès !');
});

module.exports = app;