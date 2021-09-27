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

pgClient.query("SELECT * FROM customer;", (err, res) => {
    if (err !== null) {
        console.log(err)
    } else {
        console.log(res.rows)
    }
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({

    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening at ${process.env.SERVER_PORT}`)
})