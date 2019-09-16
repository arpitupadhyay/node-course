// CRUD CREATE READ UPDATE DELETE

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5d7f3eeef517c2349c66b7b5")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    
    // db.collection('users').insertMany([
    //     {
    //         name: 'Arpit',
    //         age: 27
    //     }, {
    //         name: 'Mike',
    //         age: 27
    //     }, {
    //         name: 'xyz',
    //         age: 18
    //     }, {
    //         name: 'Arpit',
    //         age: 20
    //     }, {
    //         name: 'vikram',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })


})


