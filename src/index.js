const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
// const { syncIndexes, findByIdAndDelete } = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down. Check back soon.")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

// const User = require('./models/user')
// const Task = require('./models/task')

// const main = async () => {
//     // const task = await Task.findById('60c35f863874003a30008d3e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task)

//     const user = await User.findById('60c35f7e3874003a30008d3c')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()