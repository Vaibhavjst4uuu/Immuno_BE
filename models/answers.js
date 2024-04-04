const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionnaire_id: {
    type: Schema.Types.ObjectId,
    ref: 'Template',
    required: [true, "Please provide a valid template id"]
  },
  patient_id: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, "Please provide a valid patient id"]
  },
  editor_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Editor is required"],
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  answers: {
    type: Array, // array of strings representing the user's response to each question in the template
    required:[true,'Please provide an answer']
  },
  version:{
    type: Number,
    default:1
  }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
