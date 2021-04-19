const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/users', function (err, client) {
  if (err) throw err

  var db = client.db('animals')

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

app.get('/users', (req, res) => {
    res.send({ 
        message: 'dojdovte na GET /users',
        hehe: true,
        haha: 1234,
        hihi: [1, 2, 3, 4]
    });
});

app.listen(27017, () => {
    console.log('App is started on port 27017...')
})