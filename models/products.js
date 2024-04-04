const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the product']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description of the product']
  },
  admin_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Please provide an admin_id"]
  },
  activation_status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
