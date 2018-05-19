const mongoose = require('mongoose'),
      UserModel = require('@B2iModels/user'),
      ProjectModel = require('@B2iModels/project'),
      PostModel = require('@B2iModels/post');

const models = {
  User: mongoose.model('User'),
  Project: mongoose.model('Project'),
  Post: mongoose.model('Post')
}

module.exports = models;
