/*
Gursharan Preet Kaur
C07477566
*/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sukhpreet:Sunny987tt@cluster0-tyh4l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
console.log('Opening...');
client.connect(err => {
  const collection = client.db("TheBankofIndia").collection("c07477566");
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
                salaryPayDate:"1-mmy-yy",
                bonus:500,
                }
                ];
  
  collection.insertMany(data, function(err,res){
    console.log("Data inserted");
  });
  client.close();
  console.log('Db closed..');
});
