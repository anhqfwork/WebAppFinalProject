const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.json())

let cors = require('cors')

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)

// import routes
const equipment = require('./routes/equipment')

// port
const port = process.env.PORT || 5000

// routes
app.use('/api/v1/equipment', equipment)

// start
const start = async () => {
    try {
        await connectDB
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()
