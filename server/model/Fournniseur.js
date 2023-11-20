const mongoose = require('mongoose');

const FournniseurSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    
    companyDescription: {
        type: String,
        required: true,
    },
    companyDomaine: {
        type: String,
        required: true,
    },
    companyImage: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Fournniseur', FournniseurSchema);