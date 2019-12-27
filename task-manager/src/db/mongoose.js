const mongoose = require('mongoose')
const config = require('../../config/config')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('MongoDB successfully connected. Database URL:', config.MONGODB_URL);
}).catch(error => {
    console.log('Error establishing MongoDB connection. Error:', error.message);
});