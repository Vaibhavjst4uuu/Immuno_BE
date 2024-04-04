const express = require( 'express' );
const router = express.Router();


const productCtrl  = require("../controllers/productController");



router.post( '/add_product', productCtrl.addProduct);




module.exports = router;