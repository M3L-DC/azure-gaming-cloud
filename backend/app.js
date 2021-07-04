const express = require('express');
const Start = require('./scripts/script_start.js');
const Stop = require('./scripts/script_stop.js');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json()); //parse the body into a json object


app.post('/api/games/start_vm', (req, res) => {
    try {
        console.log("start la vm");
        Start.play();
        res.status(201).json({ message: 'VM demmarré avec succès !', vmIsRunning: true });
    } catch (e) {
        res.status(500).json({ error: JSON.stringify(e), vmIsRunning: true });
    }
});

app.post('/api/games/stop_vm', (req, res) => {
    try {
        console.log("stop la vm");
        Stop.stop();
        res.status(201).json({ message: 'VM stoppé avec succès !', vmIsStopped: true });
    } catch (e) {
        res.status(500).json({ error: JSON.stringify(e), vmIsStopped: false });
    }
});


app.get('/api/games', (req, res, next) => {
    console.log("Catalogue de jeu envoyé");
    const games = [
        {
            _id: 1,
            title: 'Tourelle',
            active: true,
        },
        {
            _id: 2,
            title: 'Collectible',
            active: false,
        },
    ];
    res.status(200).json(games);
});

app.get('/api/users', (req, res, next) => {
    const users = [
        {
            id: 1,
            username: "user",
            password: "password",
        }
    ]
    res.status(200).json(users);
});

module.exports = app;
