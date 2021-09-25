// const connectDb = require('./Database');
const express = require("express");
const cors = require('cors');
const router = require("./router");
const server = express();
const mongoose = require('mongoose');
const PORT = 5000;

mongoose.connect("mongodb://localhost/pers-db", {useNewUrlParser: true});
server.use(cors());
server.use(express.json());
server.use("/api", router);

server.use(express.static('images'));
const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });
}

startServer();

// connectDb()
//     .on('error', console.log)
//     .on('disconnected', connectDb)
//     .once('open', startServer)
