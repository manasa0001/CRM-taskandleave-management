
// models/LeaveUpdate.js
// models/LeaveUpdate.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const leaveUpdateSchema = new Schema({
  leaveId: {
    type: Schema.Types.ObjectId,
    ref: "Leave",
    required: true
  },
  employeeName: { type: String, required: true },
  leaveType:    { type: String, required: true },
  fromDate:     { type: Date,   required: true },
  toDate:       { type: Date,   required: true },
  status:       { type: String, enum: ["Approved", "Rejected"], required: true },
  message:      { type: String, required: true },  // 🆕 message field for notifications
  seen:         { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("LeaveUpdate", leaveUpdateSchema);
