const db = require("../models");



const addProduct = async(req,res)=>{
    try {
        if(!req.body){
            throw new Error( "Please provide product data");
        }
        const product = await db.Product.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Product added successfully!",
            data:product
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while adding product",
            error:error
        });
    }
}











module.exports = {
    addProduct
}