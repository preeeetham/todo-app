const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://preetham1331:Preethampipi1331@cluster0.5tgpm3j.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}