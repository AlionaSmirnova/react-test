const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imgSchema = new Schema({
 pers_id: String,
 path: String,
 type: String
});
const Img = mongoose.model("images", imgSchema);
module.exports = Img;