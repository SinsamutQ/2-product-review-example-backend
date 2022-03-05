const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    realName: {
        type: String,
        required: true,
    },
    typeOrCategory: {
        type: String,
        required: true,
    },
    brandOrCompany: {
        type: String,
        required: true,
    },
    // not sure
    goodOrNot: {
        type: String,
        required: true,
    },
    massage: {
        type: String,
        required: true,
    },
    photo: {
        type:String,
        required:false,
    }
    
},{ timestamps: true },
);

module.exports = mongoose.model("Product", UserProductSchemaSchema);