let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with model

let Run = require('../models/run')
let runController = require('../controller/run');
const run = require('../models/run');
/*CRUD operations*/
/*Read Operation*/
/* get route*/

router.get('/', runController.displayRuns);

/*Add operation*/
/*get route to display the new add-page - create operation*/
router.get('/add', runController.displayAdd);
/*Post route for processing the add-page - create opertion*/
router.post('/add', runController.processAdd);


/* Edit operation*/
/* Get route for displaying the edit operation - update operation*/
router.get('/edit/:id', runController.displayEdit);
/* Post route for displaying the edit operation - */
router.post('/edit/:id', runController.processEdit);

/*Delete operation */
/*Get to perform delete Operation - deletion*/
router.get('/delete/:id', runController.Delete);


module.exports = router;

/*routing done using controller page*/
