const express = require("express")
const route = express.Router()
const item = require("../schemas/invoice")


route.post("/create_invoice", async (req, res) => {
    try {
        const {item, total_price} = req.body
        const addItem = new item({item,total_price})
    
        await addItem.save()
    
        return res.status(200).json({addItem})
    }catch(Err) {
        console.log(err);
    }
})