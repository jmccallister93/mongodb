const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://jmccallister:pigpig99@mernapp.aykgc4l.mongodb.net/test'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}
