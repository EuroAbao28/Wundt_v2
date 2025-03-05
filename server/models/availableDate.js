const mongoose = require("mongoose")

const availableDateSchema = new mongoose.Schema({
    date: {type: Date, required: true, unique: true},
    slots: [{type: String}],
    isAvailable: { type: Boolean, default: true}
})

module.exports = mongoose.model("AvailableDate", availableDateSchema);