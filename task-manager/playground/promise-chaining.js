require('../src/db/mongoose')
const User = require('../src/models/user')



User.findByIdAndUpdate('5d84b6a68ce48f28f4ab84a9', { age: 1 }).then((user) => {
    console.log(user)
})