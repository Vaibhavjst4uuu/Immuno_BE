const db = require("../models");


const addQuery = async (req,res)=>{
    try {

        if(!req.body){
            throw new Error( "Please provide Query data");
        }
        // return res.json(req.body);
        const Template = await db.Query.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Query added successfully!",
            data:Template
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while adding query",
            error:error
        });
    }
}







module.exports = {
    addQuery
}