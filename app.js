const express = require('express')
const Datastore = require('nedb-promise')
const cors = require('cors')
const bcrypt = require('bcryptjs')

//routes
const authentication = require('./routes/authentication.js')

// const users = new Datastore({ filename: 'users.db', autoload: true })
const post = new Datastore({ filename: 'post.db', autoload: true })
const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(authentication)

app.get('/post', async (req, res) => {
    const responsiveJSON = await post.find({})
    res.json({ 'responsiveJSON': responsiveJSON })
})

app.post('/post', async (req, res) => {
    const newPost = await {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    const documents = await post.insert(newPost)
    res.json(documents)
})

app.delete('/post/:id', async (req, res) => {
    const documents = await post.remove({ _id: req.params.id })
    res.json(documents)
})


app.patch('/post/:id', async (req, res) => {
    const documents = await post.update({ _id: req.params.id }, {
        $set: {
            title: req.body.title,
            content: req.body.content
        }
    })
    res.json({ 'documents': documents })
})



//--post-end--//
app.listen(8070, () => console.log('Server started'))