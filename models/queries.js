const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
  template_id: {
    type: Schema.Types.ObjectId,
    ref: 'Template',
    required: [true, "Template ID can't be blank"]
  },
  answer_id: {
    type: Schema.Types.ObjectId,
    ref: 'Answer',
    required: [true, "Template ID can't be blank"]
  },
  question_id:{
    type: String,
    required:[true,'Question id is missing']
  },
  query:{
    type: String,
    required: [true, "Query can't be blank"],
  },
  isResolved: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
