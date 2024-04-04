const express = require( 'express' );
const router = express.Router();


const caseCtrl  = require("../controllers/caseControllers");



router.post( '/register_case', caseCtrl.resgisterCase);




module.exports = router;