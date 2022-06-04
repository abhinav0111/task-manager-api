const express = require('express')
require('./DB/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// const sharp = require('sharp')
// const multer = require('multer')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     // if (req.method == 'GET') {
//     //     res.send('Get requests are disabaled')
//     // } else {
//     //     next()
//     // }


//     res.status(500).send("Sorry! Under Maintenanace")

// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
//     // const task = await Task.findById('628b57e0823313c3a5e1cb8d')
//     // await task.populate([{ path: 'owner' }])
//     // console.log(task.owner)

//     const user = await User.findById('628b53c4cd886946be04b035')
//     aw
//     console.log(user.tasks)
// }

// main()

// const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     //     const password = 'Red12345!'
//     //     const hashedPassword = await bcrypt.hash(password, 8)

//     //     // console.log(password)
//     //     // console.log(hashedPassword)

//     //     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     //     // console.log(isMatch)
//     const token = jwt.sign({ _id: 'dummyId' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'teja'
// }
// pet.toJSON = function () {
//     return ()
//     // console.log(this)
//     // return this
// }

// console.log(JSON.stringify(pet))