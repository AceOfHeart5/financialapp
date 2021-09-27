require('dotenv').config()

const { Client } = require('pg')

const client = new Client({
    host:       process.env.DB_HOST,
    port:       process.env.DB_PORT,
    database:   process.env.DB_DATABASE,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASSWORD
})
client.connect()

client.query("SELECT * FROM person;", (err, res) => {
    if (err !== null) {
        console.log(err)
    } else {
        console.log(res.rows)
    }
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening at ${process.env.SERVER_PORT}`)
})