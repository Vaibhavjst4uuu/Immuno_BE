const db = require("../models");


const resgisterPatient = async (req,res)=>{
    try {
        if(!req.body){
            throw new Error( "Please provide patient data");
        }
        const user = await db.Patient.create(req.body);

        res.status(200).json({
            statusCode:200,
            responseCode:"SUCCESS",
            message:"Patient registered successfully!",
            data:{user}
        });
    } catch (error) {
        // console.error(error);
        res.status(400).json({
            statusCode: 400,
            responseCode: 'ERROR',
            message: error.message ? error.message : "Error while registering patient",
            error:error
        });
    }
}









module.exports = {
    resgisterPatient
}