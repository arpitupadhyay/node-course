require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d8e02f62165c23640071283').then((task)=> {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})