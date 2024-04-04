const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, "Please provide a valid Product ID"]
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required."]
  },
  activation_status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  start_date: {
    type: Date,
    default: Date.now()
  },
  end_date: {
    type: Date,
    required: false
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
