/*
Samkit Shah
C0745113
*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sukhpreet:Sunny987tt@cluster0-tyh4l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
console.log('Opening...');
client.connect(err => {
  const collection = client.db("TheBankofIndia").collection("c0745113");
  console.log("Db connected");
  var data = [
                
            ];
  
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });
    
  client.close();
  console.log('Db closed..');
});
