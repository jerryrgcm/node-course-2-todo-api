//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected');

  // db.collection('Todos').deleteMany( {text: "walk"}).then ( (result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch');
  // });

// db.collection('Users').findOneAndDelete( {_id: new ObjectID('58decd0884c0de1b34882b0c')}).then(
//   (result) => {
//   console.log(result);
// }
// );

db.collection('Users').deleteMany( {name: 'joe'}).then(
  (result) => {
  console.log(result);
}
);

  //db.close();
});
