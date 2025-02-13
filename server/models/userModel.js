const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  steamProfile: String,
  skill: String,
  age: Number,
  timezone: String,
  currentTeam: String,
  isAdmin: Boolean,
  primaryGame: String,
  hobbyGames: [{game: String}],
  lastSeen: Date,
  logo: String,
  createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);