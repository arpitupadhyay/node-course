require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d8e02f62165c23640071283').then((task)=> {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d8e03b9e5757819a0298506').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})