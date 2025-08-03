

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