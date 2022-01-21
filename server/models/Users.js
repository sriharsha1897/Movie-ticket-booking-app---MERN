const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema =  new Schema(
  {
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { timestams: true }
);

const User = mongoose.model('users',UserSchema);
module.exports = User;
