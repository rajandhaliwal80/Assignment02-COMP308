/* project.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

let projectController = require('../controller/project');

router.get('/products', projectController.displayProjectPage);



module.exports = router;
