const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PersSchema = new Schema({
 nickname: String,
 realname: String,
 descrip: String,
 power: String,
 phrase: String
});
const Pers = mongoose.model("pers", PersSchema);
module.exports = Pers;
// import {Schema as _Schema} from "mongoose";

// const Schema = _Schema;

// const persSchema = new Schema()