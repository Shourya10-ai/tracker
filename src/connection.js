require("dotenv").config({path: require("path").resolve(__dirname,".env")});
const mongoose = require("mongoose");


const uri = process.env.MONGO_URI;
console.log("MONGO_URI=",String(process.env.MONGO_URI));

mongoose
  .connect(uri)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err.message));

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Task', taskSchema);
