let mongoose = require("mongoose");

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
});

module.exports= mongoose.model("photoModel", photosSchema);
//just the image is needed.
