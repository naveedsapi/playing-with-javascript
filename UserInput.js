

//How to Accept user input
// 1. Easy way user promt
//2. professional way=Html TextBox

/*

let username;
username=window.prompt("What is your name");
console.log(username);

let username1;
document.getElementById("btnsubmit").onclick = function(){

    username1 = document.getElementById("txtbox").value;
    console.log(username1);
   document.getElementById("txtboxDataDisplay").textContent= `Your Full Name is : ${username1}`;
    //console.log(username1);
}
*/

//Type Converstion= change the datatype of a another 
//                         (strings, number, booleans)
// 1 .Example

/*
let age=window.prompt("how old are you");
age=Number(age);
age +=1;
console.log(age);
console.log(age, typeof age);

// 2 Example type converston
let x = "";
let y = "";
let z = "";

x = Number (x);
y = String (y);
z = Boolean (z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/
// const = a variable that can't be changed
// 1 Example 
//let PI =3.1415;
//let radius;
//let circumference;

//radius = window.prompt("Enter the Radius of a circle");
//radius = Number (radius);
//circumference = 2 * PI * radius;
//document.getElementById("PiCount").textContent = circumference;
//console.log(circumference);

// 2 Example
let PI =3.1415;
let radius;
let circumference;

document.getElementById("btnpi") . onclick = function(){
  radius  =  document.getElementById("txtpi"). value;
  radius = Number (radius);
  circumference = 2 * PI * radius;
  document.getElementById("PiCount").textContent = circumference;
}


