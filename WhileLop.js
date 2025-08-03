
//  While loop = repeat some while some condition is true

/*
let username="";
while(username == "" || username == null){
  username = window.prompt("Enter your name");   
}
console.log(` Hallo ${username} `);

*/

/*

let username1;
do{
  username1 = window.prompt("Enter your name");   
}while(username1 == "" || username1 == null)
console.log(` Hallo ${username1} `);

*/

/*

let loggedIn = false;
let username;
let password;

while(!loggedIn){

    username = window.prompt("Enter Your Username");
    password = window.prompt("Enter Your Password");

    if(username == "myusername" && password == "mypassword"){
        loggedIn = true;
        console.log("You are Logged In!");
    }else{
        console.log("Invalid Credentials! Please try again");
    }
}
*/


// for loop = repeat some code a limited amounto of time


for(let i =1; i <= 10; i+=1){

    if(i==4){
        //continue;
        break;
        
    }
    console.log(i);
}
console.log("Happy new Year");



