const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
const mangoose = require("./config/db");
const model = require("./models/index");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



const indexRoute = require("./routes/index");
  



app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //parses incoming requests with JSON payloads
app.use(cors({
  origin: '*',
}));

app.use("/", indexRoute);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});