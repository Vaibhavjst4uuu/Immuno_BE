const db = require("../models");


const resgisterCase = async (req,res)=>{
    try {
        if(!req.body){
            throw new Error( "Please provide case data");
        }
        // res.json(req.body);
        const data = await db.Case.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Case registered successfully!",
            data:data
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while registering Case",
            error:error
        });
    }
}









module.exports = {
    resgisterCase
}