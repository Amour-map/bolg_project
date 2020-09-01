const mongoose = require('./mongodb');

const Schema = mongoose.Schema;

// 设计用户表结构
const article = new Schema({
  article_id: {
    type: String,
    default: uuid.v1()
  },
  title: {
    type: String,
    required: true
  },
  sub_title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imgs: {
    type: String,
    required: true
  }
});

const Article = mongoose.model('Article', article);

module.exports = Article;
