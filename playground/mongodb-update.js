//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected');

  db.collection('Users').findOneAndUpdate( { _id: new ObjectID('58e41a425726dcafcc99f9ff') },
{
  $inc :  {age : 1},
  $set : { text: 'fred'}
},  {
    returnOriginal :  false
  }).then ( (result) => {
      console.log( result );
  });
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch');
  // });

  //db.close();
});
