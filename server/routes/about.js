/* about.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();


let aboutController = require('../controller/about');

router.get('/about', aboutController.displayAboutPage);

module.exports = router;





