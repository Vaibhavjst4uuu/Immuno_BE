const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activityLogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  activityType: {
    type: String,
    required: true
  },
  details: {
    ipAddress: {
      type: String,
      required: true
    },
    deviceType: {
      type: String,
      required: true
    },
    browser: {
      type: String,
      required: true
    }
  }
});

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;
