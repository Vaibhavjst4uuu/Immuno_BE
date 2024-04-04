const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the patient']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, "Gender can't be blank"]
  },
  editor_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Editor must be set']
  },
  activation_status: {
    type: String,
    enum: ['pending', 'active', 'deleted'],
    default: 'pending'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
