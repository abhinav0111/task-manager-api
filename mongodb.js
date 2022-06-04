// // CRUD create read update delete

// // C       R        U         D

// // -----------------------------Create------------------------------

// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID=mongodb.ObjectID

// // const { MongoClient, ObjectID } = require('mongodb')

// // const connectionURL = 'mongodb://127.0.0.1:27017'
// // const database = 'task-manager'

// // const id = new ObjectID()
// // console.log(id)
// // console.log(id.id.length)
// // console.log(id.toHexString().length)
// // MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
// //     if (error) {
// //         return console.log("unable to connect to DB")
// //     }
// //     // console.log("connected Successfully")
// //     const db = client.db(database)

// // db.collection('users').insertOne({
// //     _id: id,
// //     name: 'Ram',
// //     age: '29'
// // }, (error, result) => {
// //     if (error) {
// //         return console.log('Unable to insert the user')
// //     }

// //     console.log(result.insertedId)
// // })
// // db.collection('users').insertMany([
// //     {
// //         name: 'tej',
// //         age: '22',

// //     },
// //     {
// //         name: 'raj',
// //         age: '19'
// //     }
// // ], (error, result) => {
// //     if (error) {
// //         return console.log('Unable to insert documents!')
// //     }
// //     console.log(result.insertedIds)
// // })

// //     db.collection('new-tasks').insertMany([
// //         {
// //             description: "reading",
// //             completed: false
// //         },
// //         {
// //             description: "eating",
// //             completed: true
// //         },
// //         {
// //             description: "sleeping",
// //             completed: false
// //         }
// //     ], (error, resultt) => {
// //         if (error) {
// //             return console.log('Unable to insert documents!')
// //         }
// //         console.log(resultt.insertedIds)
// //     })
// // })


// //---------------------------READ--------------------------------


// // const { MongoClient, ObjectID } = require('mongodb')

// // const connectionURL = 'mongodb://127.0.0.1:27017'
// // const database = 'task-manager'

// // MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
// //     if (error) {
// //         return console.log("unable to connect to DB")
// //     }
// //     const db = client.db(database)
// //     console.log("Connected successfully!")

// //     // db.collection('users').findOne({ name: 'abhinav', age: '20' }, (error, result) => {
// //     //     if (error) {
// //     //         return console.log('Unable to fetch')
// //     //     }
// //     //     console.log(result)
// //     // })

// //     // db.collection('users').find({ name: 'abhinav', age: '20' }).toArray((error, users) => {
// //     //     console.log(users)
// //     // })

// //     // db.collection('users').find({ name: 'abhinav' }).count((errot, user) => {
// //     //     console.log(user)
// //     // })

// //     db.collection('new-tasks').findOne({ _id: new ObjectID('6280e35eaaffa4b1a16926c0') }, (error, user) => {
// //         if (error) {
// //             console.log('Some Error.....')
// //         }
// //         else {
// //             console.log(user)
// //         }
// //     })
// //     db.collection('new-tasks').find({ completed: false }).toArray((error, res) => {
// //         console.log(res)
// //     })
// // })


// //-----------------------------------UPDATE---------------------------------------------

// // const { MongoClient, ObjectID } = require('mongodb')

// // const connectionURL = 'mongodb://127.0.0.1:27017'
// // const databaseName = 'task-manager'

// // MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
// //     if (error) {
// //         return console.log('Unable to connect to database!')
// //     }

// //     const db = client.db(databaseName)

// //     // db.collection('users').insertOne({
// //     //     name: 'abhinav',
// //     //     age: 20
// //     // }, (error, result) => {
// //     //     if (error) {
// //     //         return console.log("Error! ,Something went wrong")
// //     //     }
// //     //     console.log(result.insertedId)
// //     // })

// //     // const updatePromise = db.collection('users').updateOne({
// //     //     _id: new ObjectID('6281d8301e5f578e7fc78e92')
// //     // }, {
// //     //     $set: {
// //     //         name: 'kohli'
// //     //     }
// //     // })

// //     // updatePromise.then((result) => {
// //     //     console.log(result)
// //     // }).catch(() => {
// //     //     console.log(error)
// //     // })

// //     // db.collection('users').updateOne({
// //     //     _id: new ObjectID('6281d8301e5f578e7fc78e92')
// //     // }, {
// //     //     $inc: {
// //     //         age: 2
// //     //     }
// //     // }).then((result) => {
// //     //     console.log(result)
// //     // }).catch(() => {
// //     //     console.log(error)
// //     // })

// //     db.collection('new-tasks').updateMany({
// //         completed: false
// //     }, {
// //         $set: {
// //             completed: true
// //         }
// //     }).then((result) => {
// //         console.log(result)
// //     }).catch((error) => {
// //         console.log(error)
// //     })


// // })


// //------------------------------------Delete-----------------------------------

// const { MongoClient, ObjectID, Db } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

//     // db.collection('users').deleteMany({
//     //     age: '29'
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     db.collection('new-tasks').deleteMany({
//         description: 'reading'
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

// })