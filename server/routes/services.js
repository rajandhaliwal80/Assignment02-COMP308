/* services.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

let servicesController = require('../controller/services');

router.get('/services', servicesController.displayServicesPage);


module.exports = router;
