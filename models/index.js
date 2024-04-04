
// Define all your models here
const User = require('./users');
const Product = require('./products');
const Case = require('./cases');
const Template = require('./templates');
const Patient = require('./patients');
const Answer = require('./answers');
const ActivityLog = require('./activityLogs');
const Hospital = require('./hospitals');
const Query = require("./queries");

// Use your models as needed


module.exports = {
    User,
    Product,
    Case,
    Template,
    Answer,
    Patient,
    ActivityLog,
    Hospital,
    Query
}
