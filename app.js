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

// LOGIN
// app.post('/login', async (req, res) =>{
//     const user =  await users.findOne({email: req.body.email})
//     if(user && user.password == req.body.password){
//         res.status(200)
//         res.send('sucess')
//     } else {
//         res.status(404)
//         res.send({error: 'error'})
//     }
// })


app.post('/users', async (req, res) => {
    let user = await users.findOne({ email: req.body.email })
    let emailSign = req.body.email

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

    } else {
        console.log("error")
    }

})

app.get('/post', async (req, res) => {
    const responsiveJSON = await post.find({})
    res.json({ 'responsiveJSON': responsiveJSON })
})


app.get('/post/:id', async (req, res) => {
    const documents = await post.findOne({ _id: req.params.id })
    res.json(documents)
})

app.delete('/post/:id', async (req, res) => {
    post.remove({ _id: req.params.id }, {
        function(err, doc) {
            res.json('/')
        }
    })
})

app.patch('/post/:id', async (req, res) => {
    post.edit(
        { _id: req.params.id },
        { $set: { title: req.body.title } }
    );
    res.json(documents);
});


/*
app.patch('/users/:id', (req, res) => {
    post.edit({ _id: req.params.id }).update(req.body), function (err, doc) {
        res.json(edit)
    }
})
*/

/*
app.get('/post/:id', async (req, res) => {
    const responsiveJSON = await post.find({ _id: parseInt(req.params.id) })
    if (responsiveJSON.length > 0) {
        res.json({ 'responsiveJSON': responsiveJSON })
    } else {
        res.status(404);
        res.send({ error: 'Not Found' });
    }
})
/*

//--Rodrigo post--//

/*
app.post("/post/add", (req, res) => {
    const newNote = {
        title: req.body.title,
        content: req.body.content,
        owner: req.session.user
    };
    note.insert(newNote, function (err, doc) {
        res.redirect("/");
    });
});

app.post("/post/delete/:noteId", (req, res) => {
    notes.remove({ _id: req.params.noteId }, function (err, doc) {
        res.redirect("/");
    });
});

app.post("/post/update/:noteId", (req, res) => {
    notes.update({ _id: req.params.noteId }, function (err, doc) {
        res.redirect("/");
    });
});
*/

//--post-end--//
app.listen(8070, () => console.log('Server started'))