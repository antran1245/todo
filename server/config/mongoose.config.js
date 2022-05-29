const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection made to MongoDB"))
.catch(err => console.log("Connection error: ", err));