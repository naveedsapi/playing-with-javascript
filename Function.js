

// Function = a Section of reusable code.
//              Declare Code once, use it whenever you want.
//               Call the function to execute That code.

/*
let vorname;
let age;
let mylocation;
function hallo(vorname,age,mylocation){
    console.log("Hallo World my Name is "+ vorname+"age is "+age+"address"+mylocation);
    console.log("You are Beautiful and my Name is  "+ vorname+"age is "+age+"address"+mylocation);
    console.log("I Love You my Beautiful World and my Name is  "+ vorname+"age is "+age+"address"+mylocation);
}
hallo("Miguel","22","Datteln");
hallo("Miguel","22","Datteln");
hallo("Miguel","22","Datteln");

*/

/*


function add(x, y){
     return  x+y;
}
function subtract(x, y){
     return  x-y;
}
function multiply(x, y){
     return  x*y;
}
function divide(x, y){
     return  x/y;
}
function isEven(number){
     if(number % 2 ===0){
        return true;
     }else{
        return false;
     }
}

function isEmailValid(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
console.log(isEven(3));
console.log(isEmailValid("Brocode@gmail.com3"));

*/

// Temperature Conversion Program
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
if(toFahrenheit.checked){

   temp = Number(textbox.value);
   temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F"
   // result.textContent = "You selected To fahrenheit";
} else if(toCelsius.checked){
     temp = Number(textbox.value);
    temp = (temp -32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C"
   // result.textContent = "You Selected to Celsius";
}else{
    result.textContent = " Please Select Unit ";
}



}





