const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const userRoutes = require('./api/routes/userRoute');
const db = require('./config/keys').URI;

mongoose.connect(db)
    .then(() => {
        console.log('mongodb is connected')
    })
    .catch((err) => {
        console.log(err)
    })

// server.use('/', (req, res) => {
//     res.json({ succes: true })
// })


server.use('/user',userRoutes)



let PORT = process.env.PORT || 8080;

server.listen(PORT, () => `server is running at port ${PORT}`)