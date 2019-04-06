let express = require("express");
let router = express.Router();

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' ,displayName: req.user ? req.user.displayName : ""});
  }