const express = require( 'express' );
const router = express.Router();


const queryCtrl  = require("../controllers/queriesControllers");



router.post( '/add_query', queryCtrl.addQuery);




module.exports = router;