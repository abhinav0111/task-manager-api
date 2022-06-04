const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL)



// const me = new User({
//     name: 'Abhinav',
//     email: 'Abhiu@gmail.com',
//     age: 3,
//     password: 'pAss1word1'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!", error)
// })

// const Task = mongoose.model("Task", {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }

// })

// const me = new Task({
//     description: 'Assignment',
//     completed: true
// })

// const me = new Task({
//     description: 'AIR'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!", error)
// })