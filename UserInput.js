

//How to Accept user input
// 1. Easy way user promt
//2. professional way=Html TextBox


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
