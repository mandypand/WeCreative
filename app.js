const express = require('express')
const Datastore = require('nedb-promise')
const cors = require('cors')
const users = new Datastore({ filename: 'users.db', autoload: true })
const post = new Datastore({ filename: 'post.db', autoload: true })
const app = express()

app.use(cors())
app.use(express.json())

app.get('/users', async (req, res) => {
    const responsiveJSON = await users.find({})
    res.json({ 'responsiveJSON': responsiveJSON })
})

app.get('/users/:id', async (req, res) => {
    const documents = await users.findOne({ _id: req.params.id })
    res.json(documents)
})

app.post('/users', async (req, res) => {
    let user = await users.findOne({ email: req.body.email })
    let userName = await users.findOne({username: req.body.username})

    if(!userName){
        if (!user) {
            let newUser = {
                name: req.body.name,
                surname: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            const documents = await users.insert(newUser);
            res.json(documents)
    
        }

    }
    else {
        res.status(404)
        res.send({error: 'error'})
    }

})


//--Rodrigo post--//
app.post("/add", (req, res) => {
    const newNote = {
        title: req.body.title,
        content: req.body.content,
        owner: req.session.user
    };
    note.insert(newNote, function (err, doc) {
        res.redirect("/");
    });
});

app.post("/delete/:noteId", (req, res) => {
    notes.remove({ _id: req.params.noteId }, function (err, doc) {
        res.redirect("/");
    });
});

app.post("/update/:noteId", (req, res) => {
    notes.update({ _id: req.params.noteId }, function (err, doc) {
        res.redirect("/");
    });
});
//--post-end--//
app.listen(8070, () => console.log('Server started'))