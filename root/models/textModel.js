const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Text schema
const textSchema = new Schema({
  submittedText: Object
});

const TextInput = mongoose.model('TextInput', textSchema);

module.exports = TextInput;