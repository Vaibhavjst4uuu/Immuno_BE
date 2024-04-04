const db = require("../models");


const resgisterUser = async (req,res)=>{
    const { firstName, lastName} = req.body;
    try {
        if(!req.body){
            throw new Error( "Please provide user data");
        }
        const user = await db.User.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"User registered successfully!",
            data:{user}
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while creating User",
            error:error
        });
    }
}









module.exports = {
    resgisterUser
}