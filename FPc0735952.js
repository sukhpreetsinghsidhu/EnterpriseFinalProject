/*
Gursharan Preet Kaur
C0747566
*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sukhpreet:Sunny987tt@cluster0-tyh4l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
console.log('Opening...');
client.connect(err => {
  const collection = client.db("TheBankofIndia").collection("c07477566");
  const collection3 = client.db("TheBankofIndia").collection("c07477566Col3");
  const collection2 = client.db("TheBankofIndia").collection("c07477566Col2");
  console.log("Db connected");
  var data = [
              {
                employeeNo:4441,
                firstName:"Louis",
                lastName:"Lane",
                position:"Manager",
                dob:"1-Jan-1992",
                joinDate:"10-9-2019",
                departmentNo:112,
                branchNo:101
              },
              {
                employeeNo:321,
                firstName:"Iris",
                lastName:"Allen",
                position:"CTO",
                dob:"10-Jan-1989",
                joinDate:"11-July-2015",
                departmentNo:565,
                branchNo:30
              },
              {
                employeeNo:654,
                firstName:"Hardeep",
                lastName:"Kaur",
                position:"Sales Officer",
                dob:"10-Oct-1985",
                joinDate:"11-May-2016",
                departmentNo:99,
                branchNo:40
              },
              {
                employeeNo:744,
                firstName:"Gursharan Preet",
                lastName:"Kaur",
                position:"Head of IT",
                dob:"10-March-1999",
                joinDate:"18-Sept-2019",
                departmentNo:45,
                branchNo:45
              }     
            ];

            var dataCol2 = [
              {
              employeeNo:744,
              postalCode:"L8G7T4",
              streetNo:67 ,
              streetName:"WindBlazer Road",
              apt:"0",
              area:"Malton",
              city:"Missisauga",
              country:"Canada",
              },
              {
              employeeNo:654,
              postalCode:"M4R3S2",
              streetNo:19,
              streetName:"Dinosaur Crt",
              apt:"0",
              area:"Georgetown",
              city:"Georgetown",
              country:"Canada",
              },
              {
              employeeNo:4441,
              postalCode:"R4G5E2",
              streetNo:10,
              streetName:"Meowten Crt",
              apt:"0",
              area:"Hilton Hills",
              city:"Georgetown",
              country:"Canada",
              }
              ];

              var dataCol3 = [
                {
                employeeNo:744,
                salary:100000,
                commisionRate:9,
                salaryPayDate:"15-mm-yy",
                bonus:9000,
                },
                {
                employeeNo:654,
                salary:15000,
                commisionRate:5,
                salaryPayDate:"1-mm-yy",
                bonus:500,
                }
                ];


				
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });



  
 /*
 
 collection2.insertMany(dataCol2, function(err,res){
   console.log("Data inserted");
 });
 
 collection3.insertMany(dataCol3, function(err,res){
   console.log("Data inserted");
 });
 
*/



/*
var findQuery1= { 'firstName': "Gursharan Preet"};
collection.findOne(findQuery1,function(err,response){
  if(err) throw err;
  console.log(response);
});

var deleteQuery1 = {'branchNo':'30'};
collection.deleteOne(deleteQuery1,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
}); 
var updateQuery1 = {'firstName':'Louis'};
var updateValue1 ={'$set':{'position':'supervisor'}};
collection.updateOne(updateQuery1,updateValue1,function(err,response)
  if(err) throw err;
  console.log("Collection updated");
});
/*

/*
var deleteQuery2 = {'area':'Hilton Hills'};
collection2.deleteOne(deleteQuery2,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
}); 

var updateQuery2 = {'employeeNo':4441};
var updateValue2 ={'$set':{'apt':45}};
collection2.updateOne(updateQuery2,updateValue2,function(err,response)
  if(err) throw err;
  console.log("Collection updated");
});
var deleteQuery2 = {'firstName':'Iris'};
collection2.deleteOne(deleteQuery2,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
}); 
*/



var deleteQuery3 = {'employeeNo':744};
collection3.deleteOne(deleteQuery3,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
}); 
/*
var updateQuery3 = {'employeeNo':744};
var updateValue3 ={'$set':{'commisionRate':45}};
collection3.updateOne(updateQuery3,updateValue3,function(err,response)
  if(err) throw err;
  console.log("Collection updated");
});

var deleteQuery3 = {'bonus':'9000'};
collection3.deleteOne(deleteQuery3,function(err,response){
  if(err) throw err;
  console.log("Collection has been Removed !");
}); 
*/


  client.close();
  console.log('Db closed..');
});
