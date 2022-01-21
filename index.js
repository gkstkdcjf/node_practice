const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://syi04013:as8754@cluster0.7a5ch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))

app.get('/', (req, res) => res.send('Develog!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))