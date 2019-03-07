const express = require('express');
const user = require('../models/user');

const app = express.Router();

app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:id", (req, res) => {

    user.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", (req, res) => {
    user.add(req.body, (err, data) => {
        console.log(req.body);
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;