const express = require('express');
const router = express.Router();
const {sleep} = require('./utils');

router.get("/test-route", (req, res) => {
    sleep(2000).then(() => {
        res.send({message: 'Hi World, how are you'});
    });
});

router.get("/pers", (req, res) => {
    res.send({method: "GET"});
});

router.post("/pers/:id", (req, res) => {
    res.send({method: "POST"});
});
router.put("/pers/:id", (req, res) => {
    res.send({method: "PUT"});
});
router.delete("/pers/:id", (req, res) => {
    res.send({method: "DELETE"});
});

module.exports = router;