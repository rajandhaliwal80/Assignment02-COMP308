let express = require("express");
let router = express.Router();

module.exports.displayProjectPage = (req, res, next) => {
    res.render('project', { title: 'Project',displayName: req.user ? req.user.displayName : "" });
  }