const bcrypt = require('bcryptjs')

async function run() {
    const password = req.body.password 
    const hash = await bcrypt.hash(password, 10)

    const userPassword = req.body.password
    const correctPawwrod = await bcrypt.compare(userPassword, hash)

}

run()
