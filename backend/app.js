const express = require('express');
const app = express();

// const shell = require('shelljs')
// shell.exec('./path_to_your_file'); //exec a shell file

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json()); //parse the body into a json object

//route to start the vm
app.post('api/games/start_vm', (req, res, next) => {
    console.log("start la vm");
    next();
});

// app.post('/api/games', (req, res, nex) => {
//     console.log(req.body);
//     res.status(201).json({
//         message: 'Objet créé !'
//     });
// });

//route to get the games
app.use('/api/games', (req, res, next) => {
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

//route to get the games
app.use('/api/users', (req, res, next) => {
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
