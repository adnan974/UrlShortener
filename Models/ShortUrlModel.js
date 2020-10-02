var mongoose = require('mongoose');

var shortUrlShema = mongoose.Schema({
    fullUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type:String,
        required:true,
        default:"UnAutreTest"
    }
})

module.exports = mongoose.model('shortUrl',shortUrlShema);