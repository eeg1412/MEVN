var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema
var users = new Schema({
    account: String,
    password: String,
    IP: String,
});

module.exports = mongoose.model('users', users);