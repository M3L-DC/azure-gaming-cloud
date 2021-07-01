const express = require('express');
const {spawn} = require('child_process');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json()); //parse the body into a json object

app.post('api/games/start_vm', (req, res, next) => {
    console.log("start la vm");
    var dataToSend;
    const python = spawn('python', ['script_start.py']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
    next();
});

app.post('api/games/stop_vm', (req, res, next) => {
    console.log("stop la vm");
    var dataToSend;
    const python = spawn('python', ['script_stop.py']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
    next();
});

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
