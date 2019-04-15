const mongoose = require('mongoose');
const User = require('../schemas/user');

function findAllUsers(req, res) {
    User.find({}).then((results) => {
        return res.send(results);
    }).catch((err) => { throw err });
}

function findUser(req, res) {
    let id = req.params.id;
    User.findOne(id).then((result) => {
        return res.send(result);
    }).catch((err) => { throw err });
}

function findUserByEmail(req, res) {
    let email = req.body;
    User.findOne(email).then((result) => {
        return res.send(result);
    }).catch((err) => { throw err });
}

function addUser(req, res) {
    User.create(req.body).then((user) => {
        return res.send(user);
    }).catch((err) => { throw err });
}

function updateUser(req, res) {
    let id = req.params.id;
    let updates = req.body;
    User.findByIdAndUpdate(id, { $set: updates }, { new: true }).then((user) => {
        return res.send(user);
    }).catch((err) => { throw err });
}

function deleteUser(req, res) {
    let id = req.params.id;
    User.deleteOne({ _id: id }).then(() => {
        return res.send("Usuario Eliminado");
    }).catch((err) => { throw err });
}

module.exports = {
    findAllUsers,
    findUser,
    findUserByEmail,
    addUser,
    updateUser,
    deleteUser
}
