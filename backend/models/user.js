const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
  userEmail: {
    type: String,
    unique: true,
    required: [true, 'Name field is required']
  },
  userFirstName: {
    type: String,
    required: [true, 'user firstName is required']
  },
  userLastName: {
    type: String,
    required: [true, 'user lastName is required']
  },
  userGroupId: String
})

UserSchema.virtual('userId').get(function() { return this._id; });

const User = mongoose.model('user', UserSchema);

module.exports = User;