const express = require('express')
const Datastore = require('nedb-promise')
const cors = require('cors')
const users = new Datastore ({filename: 'users.db', autoload: true})
const app = express()

app.use(cors())
app.use(express.json())

app.get('/users', async(req, res) => {
    const responsiveJSON = await users.find({})
    res.json({'responsiveJSON': responsiveJSON})
}) 

app.get('/users/:id', async(req, res) => {
    const documents = await users.findOne({_id: req.params.id})
    res.json(documents)
})

app.listen(8070, () => console.log('Server started'))