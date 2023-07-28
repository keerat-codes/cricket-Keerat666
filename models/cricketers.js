const mongoose = require('mongoose');

const cricketersSchema = new mongoose.Schema({
cricketerName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('cricketers', cricketersSchema);