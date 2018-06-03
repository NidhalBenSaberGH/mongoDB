const mongoose = require("mongoose");
const userModel = require('../models/userModel');
//create the Schema
let photosSchema = mongoose.Schema({
    path : {
        type : String,
        required: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports= mongoose.model("Photo", photosSchema);
//just the image is needed.
