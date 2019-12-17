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
  const collection2 = client.db("TheBankofIndia").collection("c0745113Col2");
  const collection3 = client.db("TheBankofIndia").collection("c0745113Col3");
  console.log("Db connected");
  var data = [
                {
                    branchNo:101,
                    branchHeadId:4441,
                    noSalesEmp:4,
                    noTeller:4,
                    totalStaff:15,
                    avgCustPerDayCount:400,
                    avgNoTransactionPerDay:1500,
                    noATM:6
                },
                {
                    branchNo:30,
                    branchHeadId:322,
                    noSalesEmp:3,
                    noTeller:4,
                    totalStaff:15,
                    avgCustPerDayCount:300,
                    avgNoTransactionPerDay:900,
                    noATM:3
                },
                {
                    branchNo:40,
                    branchHeadId:677,
                    noSalesEmp:9,
                    noTeller:11,
                    totalStaff:30,
                    avgCustPerDayCount:2100,
                    avgNoTransactionPerDay:3000,
                    noATM:12
                },
                {
                    branchNo:45,
                    branchHeadId:942,
                    noSalesEmp:3,
                    noTeller:5,
                    totalStaff:14,
                    avgCustPerDayCount:190,
                    avgNoTransactionPerDay:500,
                    noATM:4
                }
            ];

    var dataCol2 = [
                {
                branchNo:45,
                postalCode:"M5T3W2",
                streetNo:10 ,
                streetName:"Pape Road",
                apt:"0",
                area:"Downton",
                city:"Toronto",
                country:"Canada",
                },
                {
                branchNo:40,
                postalCode:"M4R4S4",
                streetNo:11,
                streetName:"Sherboune Crt",
                apt:"0",
                area:"Uptown",
                city:"Toronto",
                country:"Canada",
                },
                {
                branchNo:30,
                postalCode:"W3T3E3",
                streetNo:12,
                streetName:"OldTown Crt",
                apt:"0",
                area:"Castlegrounds",
                city:"Brampton",
                country:"Canada",
                }
            ];
    var dataCol3 = [
                    {
                    branchNo:45,
                    employeeNo:779,
                    accountNo:65656564,
                    loanNo:10034
                    },
                    {
                    branchNo:40,
                    employeeNo:654,
                    accountNo:12345,
                    loanNo:4443
                    }
                ];
/*
 
 collection2.insertMany(dataCol2, function(err,res){
   console.log("Data inserted");
 });
 
 collection3.insertMany(dataCol3, function(err,res){
   console.log("Data inserted");
 });
  
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });
*/
  
  
  
  
  
 /*
  var findAQuery = { 'branchNo':101};
collection.findOne(findAQuery,function(err,response){
  if(err) throw err;
  //console.log(response);
});
/*
var updateAQuery = {'branchNo':30};
var updateAValue ={'$set':{'branchHeadId':301}};
collection.updateOne(updateAQuery,updateAValue,function(err,response){
  if(err) throw err;
  console.log("Document updated");
});
var deleteAQuery = {'branchNo':40};
collection.deleteOne(deleteAQuery,function(err,response){
  if(err) throw err;
  console.log("Document has been Removed !");
});
*/ 




/*
  var findBQuery = { 'branchNo':101};
collection2.findOne(findBQuery,function(err,response){
  if(err) throw err;
  //console.log(response);
});
/*
var updateBQuery = {'postalCode':'M4R4S4'};
var updateBValue ={'$set':{'branchHeadId':301}};
collection2.updateOne(updateBQuery,updateBValue,function(err,response){
  if(err) throw err;
  console.log("Document updated");
});
var deleteBQuery = {'branchNo':40};
collection2.deleteOne(deleteBQuery,function(err,response){
  if(err) throw err;
  console.log("Document has been Removed !");
});
*/ 
  
  
  
  


  var findCQuery = { 'branchNo':40};
collection3.findOne(findCQuery,function(err,response){
  if(err) throw err;
  console.log(response);
});
/*
var updateCQuery = {employeeNo:779};
var updateCValue ={'$set':{'accountNo':301344}};
collection3.updateOne(updateCQuery,updateCValue,function(err,response){
  if(err) throw err;
  console.log("Document updated");
});
var deleteCQuery = {'branchNo':40};
collection3.deleteOne(deleteCQuery,function(err,response){
  if(err) throw err;
  console.log("Document has been Removed !");
});
*/ 



 
  client.close();
  console.log('Db closed..');
});
