/* contact.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();


let contactController = require('../controller/contact');

router.get('/contact', contactController.displayContactPage);

module.exports = router;
