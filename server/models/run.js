let mongoose = require('mongoose')
// create a book model//
let runModel = mongoose.Schema({
    Day:String,
    Name: String,
    Distance: Number,
    Time: Number,
    Speed: Number
},
{
    collection:"runs"
}
)
module.exports = mongoose.model("runs", runModel);

