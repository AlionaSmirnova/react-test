const express = require('express');
const router = express.Router();
const {sleep} = require('./utils');
const Pers = require ("./Database/pers");
const multer = require('multer');

router.get("/test-route", (req, res) => {
    sleep(2000).then(() => {
        res.send({message: 'Hi World!'});
    });
});

router.get("/pers", (req, res) => {
    res.send({method: "GET"});
});

router.post("/pers", multer().any(), (req, res) => {
    console.log(req.file),
    Pers.create(req.body)
    .then(pers => {
        res.send(pers);
    })
});
router.put("/pers/:id", (req, res) => {
    res.send({method: "PUT"});
});
router.delete("/pers/:id", (req, res) => {
    res.send({method: "DELETE"});
});

module.exports = router;
