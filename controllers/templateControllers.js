const db = require("../models");


const addTemplate = async (req,res)=>{
    try {

        if(!req.body){
            throw new Error( "Please provide template data");
        }
        // return res.json(req.body);
        const Template = await db.Template.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Template added successfully!",
            data:Template
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while adding template",
            error:error
        });
    }
}









module.exports = {
    addTemplate
}