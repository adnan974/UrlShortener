var mongoose = require('mongoose');

// module qui permet de générer des ids uniques
var shortid = require('shortid');

var shortUrlShema = mongoose.Schema({
    fullUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type:String,
        required:true,
        default:shortid.generate
    }
})

module.exports = mongoose.model('shortUrl',shortUrlShema);