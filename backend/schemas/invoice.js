const mongoose = require("mongoose")

const invoiceItem = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    item: [],
    total_price: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        default: "pending"
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model("invoice", invoiceItem)