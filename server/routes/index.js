/* index.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

let indexController = require('../controller/index');

router.get('/', indexController.displayHomePage);

/* GET - displays the Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
