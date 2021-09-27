require('dotenv').config()

const { Client } = require('pg')

const pgClient = new Client({
    host:       process.env.DB_HOST,
    port:       process.env.DB_PORT,
    database:   process.env.DB_DATABASE,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASSWORD
})

pgClient.connect()
    .then(() => console.log('connected to postgres'))
    .catch(err => console.log('postgres connection error:', err))

const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Backend is running!')
})

app.get('/customergetall', (req, res) => {
    pgClient.query('SELECT * FROM customer;')
    .then(data => res.send(data.rows))
    .catch(err => res.send(err))
})

app.post('/customeradd', (req, res) => {
    const response = {
        success: true,
        data: null,
        error: null
    }
    if (req.body.name === '') {
        response.success = false
        response.error = 'cannot add empty name'
        res.send(response)
        return
    }
    pgClient.query('INSERT INTO customer (name) VALUES ($1);', [req.body.name])
    .then(data => response.data = data)
    .catch(err => {
        response.error = err
        response.success = false
    })
    .finally(() => res.send(response))
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening at ${process.env.SERVER_PORT}`)
})
