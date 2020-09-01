const mongoose = require('./mongodb');
const uuid = require('node-uuid');

const Schema = mongoose.Schema;

// 设计用户表结构
const user = new Schema({
  userid: {
    type: String,
    default: uuid.v1()
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', user);

module.exports = User;
