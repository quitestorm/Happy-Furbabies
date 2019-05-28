
 .
 const http = require('http');

 const hostname = '127.0.0.1';
 const port = 3000;
 
 const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, World!\n');
 });
 
 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
 
 
 
 
 
 
 
 
 
 
 
 alert("This is a dog friendly website")

 var inputDog = prompt("Enter a Dog:");

var dogType = (inputDog);

var dog;



if (dogType =="Doggie") {
   dog ="Such a cute Doggie";}

else if (dogType=="Puppy") {
 dog = "Such a cute puppy";
}

else {
dog ="Your not a dog or puppy, What are you?"
}



alert(dog);














let btn = document.getElementById('btn');
btn.addEventListener('click', nameInfo);

function nameInfo(firstName, middleName, lastName){

    firstName = document.getElementById('fName').value;
    middleName = document.getElementById('mName').value;
    lastName = document.getElementById('lName').value;

    var fullName = firstName + " " + middleName + " " + lastName;

    document.getElementById("fullName").innerHTML = fullName;
}


let btttn1 = document.getElementById('bttn1');
bttn1.addEventListener('click', nameInfor);

function nameInfor(firstNames, middleNames, lastNames){

    firstNames = document.getElementById('fiName').value;
    middleNames = document.getElementById('miName').value;
    lastNames = document.getElementById('laName').value;

    var fullNames = firstNames + " " + middleNames + " " + lastNames;

    document.getElementById("FurrbabieName").innerHTML = fullNames;
}


let btttn3 = document.getElementById('bttn3');
bttn3.addEventListener('click', nameInform);

function nameInform(firstNamess, middleNamess, lastNamess){

    firstNamess = document.getElementById('firName').value;
    middleNamess = document.getElementById('midName').value;
    lastNamess = document.getElementById('lasName').value;

    var fullNamess = firstNamess + " " + middleNamess + " " + lastNamess;

    document.getElementById("Furrbaby Parent").innerHTML = fullNamess;
}

let btttn2 = document.getElementById('bttn2');
bttn2.addEventListener('click',information);
  
function information (phoneNumber,email,Address,EmergencyContact,Vet){

  phoneNumber = document.getElementById("phoneNumber").value;
email =  document.getElementById("email").value;
Address =  document.getElementById("Address").value;
EmergencyContact =  document.getElementById("EmergencyContact").value;
Vet =  document.getElementById("Vet").value;
var allContact = phoneNumber+" "+email+ ' ' +Address+ ' ' +EmergencyContact+ ' ' +Vet;
document.getElementById("allContact").innerHTML= allContact;
}


let btttn4 = document.getElementById('bttn4');
bttn4.addEventListener('click', needs);

function needs (specialNeeds){
specialNeeds=document.getElementById("specialNeeds").value;
var specificNeeds= specialNeeds;
  document.getElementById("specificNeeds").innerHTML= specificNeeds; 
}

let btttn5= document.getElementById('bttn5');
bttn5.addEventListener('click', health);

function health (healthIssues){
  healthIssues=document.getElementById("healthIssues").value;
var healthConcerns= healthIssues;
  document.getElementById("healthConcerns").innerHTML= healthConcerns; 
}