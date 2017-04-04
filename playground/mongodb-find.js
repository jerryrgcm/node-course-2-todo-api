//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58decbf5cd08cf27980f9dc7')
  // }).toArray().then ( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  // db.collection('Todos').find().count().then ( (count) => {
  //   console.log(`Todos: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  db.collection('Users').find( {age: 34}).toArray().then ( (docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch', err);
  });

  //db.close();
});
