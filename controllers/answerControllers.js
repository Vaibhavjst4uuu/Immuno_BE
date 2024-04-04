const db = require("../models");


const addAnswer = async (req,res)=>{
    try {

        if(!req.body){
            throw new Error( "Please provide answer data");
        }
        // return res.json(req.body);
        const Answer = await db.Answer.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Answers added successfully!",
            data:Answer
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while adding answer",
            error:error
        });
    }
}









module.exports = {
    addAnswer
}