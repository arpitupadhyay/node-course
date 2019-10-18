const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
mongoose.connect("mongodb+srv://root:root@cluster0-rvniy.mongodb.net/Task-Manager_API?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:root@cluster0-rvniy.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
