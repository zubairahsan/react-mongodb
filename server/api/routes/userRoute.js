const express = require('express');
const route = express.Router();
const User = require('../../models/UserModel');

route.post('/saveme', (req, res) => {

    const newUser = new User();

    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => console.log(err));


})

route.delete('/deleteme/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

route.put('/updateme/:id', (req, res) => {
    
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            console.log(err)
        })
})
module.exports = route;