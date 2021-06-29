const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/games', (req, res, next) => {
    const games = 
    [
        {
            _id: 1,
            title: 'Tourelle',
            imageUrl: '',
            active: true,
        },
        {
            _id: 2,
            title: 'Collectible',
            imageUrl: '',
            active: false,
        },
    ];
    res.status(200).json(games);
});

module.exports = app;
