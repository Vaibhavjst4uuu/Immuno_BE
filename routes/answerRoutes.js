const express = require( 'express' );
const router = express.Router();


const answerCtrl  = require("../controllers/answerControllers");



router.post( '/add_answer', answerCtrl.addAnswer);




module.exports = router;