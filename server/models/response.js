const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
    name:{
        type: String ,
        required: true
    },
    location:{
        type: String,
        required: true,   
    },
    queryName: {
        type: mongoose.Schema.Types.String,
        ref: "Query",
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("Response", responseSchema);