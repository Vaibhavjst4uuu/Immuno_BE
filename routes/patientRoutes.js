const express = require( 'express' );
const router = express.Router();


const patientCtrl  = require("../controllers/patientController");



router.post( '/register_patient', patientCtrl.resgisterPatient);




module.exports = router;