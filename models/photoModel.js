let mongoose = require("mongoose");

//create the Schema
let photosSchema = mongoose.Schema({
    photo : {
        type : String,
        required: true
    }

});

let Photo= module.exports= mongoose.model("photoModel", photosSchema);
//just the image is needed.
