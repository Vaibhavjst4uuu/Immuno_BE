const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    validate: {
      validator: function(value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: props => `${props.value} is not a valid first name. Only alphabets are allowed.`
    }
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    validate: {
      validator: function(value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: props => `${props.value} is not a valid last name. Only alphabets are allowed.`
    }

  },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Check if the phone number is a 10-digit number starting with 6, 7, 8, or 9 (Indian mobile numbers)
        return /^[6789]\d{9}$/.test(value);
      },
      message: props => `${props.value} is not a valid Indian mobile number. Please enter a 10-digit number starting with 7, 8, or 9.`
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function(value) {
        // Using a simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: props => `${props.value} is not a valid email address.`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    validate: {
      validator: function(value) {
        // Check if the password meets the specified criteria
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value);
      },
      message: props => `Password must be 8-15 characters with at least one uppercase, one lowercase, one digit, and one special character.`

    }
  },
  role: {
    type: String,
    enum: ['superAdmin', 'investigator', 'editor'],
    required: [true, 'Role is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
},
{ timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
