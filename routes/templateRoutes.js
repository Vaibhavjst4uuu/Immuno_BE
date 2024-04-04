const express = require( 'express' );
const router = express.Router();


const templateCtrl  = require("../controllers/templateControllers");



router.post( '/add_template', templateCtrl.addTemplate);




module.exports = router;