let express = require("express");
let router = express.Router();

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' ,displayName: req.user ? req.user.displayName : ""});
  }