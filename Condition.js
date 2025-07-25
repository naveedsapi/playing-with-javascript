

/*
let age = window.prompt("Enter your Age");

if(age >= 18){
    document.getElementById("labage").textContent ="You are  "+ age+" Years old";
   
}else{
    document.getElementById("labage").textContent="You are Under Age "+age+" Years Old";
}
    */
   let agelabel= document.getElementById("agelabel");
   let txtage = document.getElementById("txtage");
   let buttonage = document.getElementById("btnage");
    let age;

   buttonage.onclick = function(){
       age = txtage.value;
       age = Number(age);
      if(age<=18){
        agelabel.textContent="Your age not allowed To Enter This sit"+age+"Under age";
       
      }else if(age>=18 && age<=30){
        agelabel.textContent="You are "+age+" years old";
      }else if(age>=30 && age<=50){
         agelabel.textContent="you age is 30 between 50 your old";

      }else {
        agelabel.textContent="Welcom to Our site";
      }
   }

   // logical oprators = used to combine or manipulate boolean values
   //                                  (true or false)
   //                                      AND = &
   //                                      OR = ||
   //                                      NOT = !
   const temp = 20;
   if(temp>0 &&  temp <= 30){
    console.log("the Weather is Good");
   }else{
    console.log("The Weather is Bad");
   }
  
   const celcius=30;
    
    if(celcius > 0 ||  celcius <= 30){
    console.log("Tempretur is High");
   }else{
    console.log("Tempretur is Good");
   }

   const isSunny =true;
   if(!isSunny){
    console.log("it is Cloudy");
   }else{
    console.log("it is Sunny ");
   }

   