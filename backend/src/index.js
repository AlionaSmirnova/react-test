// const connectDb = require('./Database');
const express = require("express");
const cors = require('cors');
const router = require("./router");
const server = express();
const PORT = 5000;

server.use(cors());
server.use("/api", router);

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
