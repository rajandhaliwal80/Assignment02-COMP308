let express = require("express");
let router = express.Router();

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About',displayName: req.user ? req.user.displayName : "" });
  }