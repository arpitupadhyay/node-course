const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
mongoose.connect("mongodb+srv://root:root@cluster0-rvniy.mongodb.net/Task-Manager_API?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})