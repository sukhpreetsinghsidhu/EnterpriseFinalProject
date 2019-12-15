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
  
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });
    
  client.close();
  console.log('Db closed..');
});
