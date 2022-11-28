let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */
router.get('/', indexController.displayHome);

/* GET home page. */
router.get('/home',indexController.displayHome);

/* GET about page. */
router.get('/about', indexController.displayAbout);

/* GET products page. */
router.get('/products', indexController.displayProducts);

/* GET services page. */
router.get('/services', indexController.displayService);

/* GET contact page. */
router.get('/contact', indexController.displayContact);

module.exports = router;
