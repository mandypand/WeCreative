const { Router } = require('express')
const Datastore = require('nedb-promise')
const router = new Router();

const users = new Datastore({ filename: 'users.db', autoload: true })
const bcrypt = require('bcryptjs')

router.get('/login', async (req, res) => {
    const responsiveJSON = await users.find({})
    res.json({ 'responsiveJSON': responsiveJSON })


})

router.post('/users', async (req, res) => {
    let user = await users.findOne({ email: req.body.email })

    if (!user) {
        const password = req.body.password
        const hash = await bcrypt.hash(password, 10)

        let newUser = {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: hash
        }
        const documents = await users.insert(newUser);
        res.json(documents)

    } else {
        res.status(404)
        res.send({ error: 'error' })
    }

})

router.post('/login', async (req, res) => {
    const user = await users.findOne({ username: req.body.username })
    const userPassword = req.body.password
    if (user) {
        const correctPassword = await bcrypt.compare(userPassword, user.password)
        if (correctPassword) {
            res.status(200)
            res.send('sucess')
        } else {
            res.status(404)
            res.send({ error: 'error' })
        }
    } else {
        res.status(404)
        res.send({ error: 'error' })
    }
})

module.exports = router