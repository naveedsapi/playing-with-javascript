




let txtday = document.getElementById("txtday");
//let day= txtday.value;
let txtmonth = document.getElementById("txtmonth");
//let month=txtmonth.value;
let txtcountry = document.getElementById("txtcountry");
//let country=txtcountry.value;

let labelday = document.getElementById("labelday");
let labelmonth = document.getElementById("labelmonth");
let labelcountry = document.getElementById("labelcountry");

let btnday=document.getElementById("btnday");
let btnmonth= document.getElementById("btnmonth");
let btncountry = document.getElementById("btncountry");


btnday.onclick = function(){
      
    let day= txtday.value;
         if(day==1){
            labelday.textContent="Monday";
         }else if(day==2) {
          labelday.textContent="Tuesday";
        }else if(day==3){
            labelday.textContent="Wensday";
        }else if(day==4) {
          labelday.textContent="Thursday";
        }else if(day==5){
            labelday.textContent="Friday";
         }else if(day==6) {
          labelday.textContent="Saterday";
        }else if(day==7){ 
          labelday.textContent="Sunday";
        }
        else {
            labelday.textContent="Please Enter The Day of Week!";
        }       
}


btnmonth.onclick = function(){

     let month= txtmonth.value;
         if(month==1){
            labelmonth.textContent="Jan";
         }else if(month==2) {
          labelmonth.textContent="Feb";
        }else if(month==3){
            labelmonth.textContent="Mar";
        }else if(month==4) {
          labelmonth.textContent="Apr";
        }else if(month==5){
            labelmonth.textContent="May";
         }else if(month==6) {
          labelmonth.textContent="Jun";
        }else if(month==7){ 
          labelmonth.textContent="July";
        }else if(month==8){ 
          labelmonth.textContent="Aug";
        }else if(month==9){ 
          labelmonth.textContent="Sep";
        }else if(month==10){ 
          labelmonth.textContent="Okt";
        }else if(month==11){ 
          labelmonth.textContent="Nov";
        }else if(month==12){ 
          labelmonth.textContent="Dec";
        }
        else {
            labelmonth.textContent="Please Enter The Day of Month!";
        }                     
}


btncountry.onclick = function(){

       let country=txtcountry.value;
    if(country==49) {
        labelcountry.textContent = "Deutschland";
    }else if(country==42){
        labelcountry.textContent="United Stats of Amireka";
    }else if(country==41){
        labelcountry.textContent="India";
    }else{
         labelcountry.textContent=" The Country Code Dose not Exist";
    
        }
    }
  
    /*
    
  let txtgrad =  document.getElementById("txtgrad");
  let labgrad =  document.getElementById("labelgrad");
  let mygrad = document.getElementById("btngrad");
  let grad=txtgrad.value;
  let displaygrad;

   mygrad.onclick = function(){

    switch(grad){

        case grad >=90 :
        labgrad.textContent = "A";
        break;
        case grad >= 80:
           labgrad.textContent ="B";
            break;
         case grad >= 60:
            labgrad.textContent  ="C";
            break;
         case grad >= 50:
            labgrad.textContent="D";
            break;
            default:
                labgrad.textContent="your grad lest";
                
    }
    //labgrad.textContent=displaygrad.value;

  }
  */  

   /*
   let grad;
   let scor=100;
   switch(true){
    case scor >= 90:
        grad="A";
        break;
        case scor >= 80:
            grad="B";
            break;
            default:
                grad="you have no grad";
   }
   console.log(grad);
   */


   // string methods = allows you to manipulate and work with text (strings)
  // let username="CodeBros";
  // console.log(username.charAt(5));
 // console.log(username.indexOf("B"));
  //console.log(username.length);
   //username = username.trim();
  //console.log(username);

  // username=username.toUpperCase();
    //username=username.toLowerCase();
   // username=username.repeat(3);
   //let result =username.startsWith(" ");
   // let result =username.endsWith(" ");
   /*
     let result =username.includes(" ");
   if(result){
    console.log("Your username can't begin with ' ' ");
   }else{
    console.log(username);

    let phonenumber="123-456-789";
   // phonenumber= phonenumber.replaceAll("-","/");
   //  phonenumber= phonenumber.padStart(13,"0");
       phonenumber= phonenumber.padEnd(13,"0");
    console.log(phonenumber);
   }

   */
    

   /*
   //string slicing = creating a substrigs form a portion of another string  string.slice(strat,end)

   const email="sapi402@gmali.com";
   let username=email.slice(0,email.indexOf("402"));
   let extension= email.slice(email.indexOf("402")+3);
   console.log(username);
   console.log(extension);
   */
  

   //Method Chaining = calling one method after another in one continuous of code.



   
   let username= window.prompt("Ennter your username");

   //   ..No method chaining..
  /*
   username = username.trim();
   let letter= username.charAt(0);
   letter = letter.toUpperCase();

   let extrachars= username.slice(1);
   extrachars-extrachars.toLowerCase();
   username = letter + extrachars;

   console.log(username);
*/
   // Chain Method ..
   username= username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
   
console.log(username);