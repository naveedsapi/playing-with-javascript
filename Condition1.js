
const checkBox = document.getElementById("btncheck");
const visaBtn = document.getElementById("btnVisa");
const  masterBtn = document.getElementById("btnMaster");
const paypalBtn = document.getElementById("btnPay");
const subResult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentResult");

const submitBtn = document.getElementById("Submit");

 submitBtn.onclick = function(){

    if(checkBox.checked){
     subResult.textContent = "You are Subscrib";
    }else{
        subResult.textContent="You are not Subscrib";
    }

    if(visaBtn.checked){
        paymentResult.textContent="You are paying with Visa";
    }else if(masterBtn.checked){
        paymentResult.textContent="You are paying with Master Card";
    }else if(paypalBtn.checked){
              paymentResult.textContent="You are paying with Paypal";
    }else {
        paymentResult.textContent="You musst Select a Payment Type";
    }
}

