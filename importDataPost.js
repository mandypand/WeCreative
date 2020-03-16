const Datastore = require('nedb-promise')
const post = new Datastore({ filename: 'post.db', autoload: true })
let postList = require('./post.json')

post.remove({}).then(() => {
    post.insert(postList.results);
});