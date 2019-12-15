/*
Sukhpreet Singh Sidhu 
C0735952
*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sukhpreet:Sunny987tt@cluster0-tyh4l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
console.log('Opening...');
client.connect(err => {
  const collection = client.db("TheBankofIndia").collection("c0735952");
  console.log("Db connected");
  var data = [
                { firstName: "Sukhpreet Singh" , 
                lastName:"Sidhu", 
                email:"sukhpreet.sidhu@email.com",
                phone:56789123,
                gender:"Male",
                dob :"1-March-1994",
                nationality:"Indian",
                accountNo:12345, 
                accountType:"Premium",
                chequingBalance:20000.95,
                savingsBalance:99000,
                savingsInterestRate:27
                },
                { firstName: "Bruce" , 
                lastName:"Wayne", 
                email:"bruce.wayne@email.com",
                phone:99988877,
                gender:"Male",
                dob :"1-June-1950",
                nationality:"America",
                accountNo:88776655, 
                accountType:"Gold",
                chequingBalance:10000000,
                savingsBalance:887766990,
                savingsInterestRate:45
                },
                { firstName: "Dianna" , 
                lastName:"Queen", 
                email:"dianna.queen@email.com",
                phone:76588990,
                gender:"Female",
                dob :"1-May-1980",
                nationality:"British",
                accountNo:65656564, 
                accountType:"Silver",
                chequingBalance:7800,
                savingsBalance:50000,
                savingsInterestRate:15
                },
                { firstName: "Radha" , 
                lastName:"Sawami", 
                email:"radha.sawami@email.com",
                phone:444666777,
                gender:"Male",
                dob :"1-June-1947",
                nationality:"Indian",
                accountNo:88779966, 
                accountType:"Bronze",
                chequingBalance:8000,
                savingsBalance:7500,
                savingsInterestRate:10
                }
            ];
  
  //Inserting the above created documents into collection - 
/*
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });
*/

//Displaying the all the documents from the collections

collection.find({}).toArray(function(err,response){
  if(err) throw err;
  //console.log(response);
});

//Display a particular document from the collection

var findQuery = { 'firstName': "Sukhpreet Singh"};
collection.findOne(findQuery,function(err,response){
  if(err) throw err;
  //console.log(response);
})

//Updating a particular document in the collection
/*
var updateQuery = {'accountNo':12345};
var updateValue ={'$set':{'savingsInterestRate':30}};
collection.updateOne(updateQuery,updateValue,function(err,response){
  if(err) throw err;
  //console.log("Collection updated");
})
*/

//Updating multiple documents in the collection at the same time
/*
var updateQuery2 = {'nationality':'Indian'};
var updateValue2 ={'$set':{'accountType':'Ultra Premium'}};
collection.updateMany(updateQuery2,updateValue2,function(err,response){
  if(err) throw err;
  //console.log("Collections are updated");
})
*/

//Delete a particular document from the collection 
/*
var deleteQuery = {'firstName':'Radha'};
collection.deleteOne(deleteQuery,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
})
*/

//Delete many documents from the collection
/*
var deleteQuery1 = {'gender':'Male'};
collection.deleteMany(deleteQuery1,function(err,response){
  if(err)throw err;
  console.log("Collections have been Removed!");
})
*/
  client.close();
  console.log('Db closed..');
});
