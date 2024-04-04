const express = require("express");
const router = express.Router();


const userRoute = require("./userRoutes");
const productRoute = require("./productRoutes");
const caseRoute = require("./caseRoutes");
const template = require("./templateRoutes");
const patient = require("./patientRoutes");
const answer =  require("./answerRoutes");
const query = require("./queryRoutes");


router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/cases", caseRoute)
router.use('/templates', template);
router.use("/patients", patient);
router.use("/answers", answer);
router.use( "/queries" , query );



module.exports = router;