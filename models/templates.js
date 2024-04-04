const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  case_id: {
    type: Schema.Types.ObjectId,
    ref: 'Case',
    required: [true, "Please provide a valid Case ID"]
  },
  activation_status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  },
  questions:{
    type:Array,
    required:[true, 'Please add at least one question']
  }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
