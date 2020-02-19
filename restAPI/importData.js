const Datastore = require('nedb-promise')
const users = new Datastore({ filename: 'users.db', autoload: true})
let userList = require ('./users.json')

users.remove({}).then(() =>{
    users.insert(userList.results);
})
