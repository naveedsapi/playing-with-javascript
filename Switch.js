


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
/*

    switch(country){

        case country = 49:
        labelcountry.textContent = "Deutschland";
        break;
        case country = 42:
            labelcountry.textContent="United Stats of Amireka";
            break;
            default:
                {
                    labelcountry.textContent=" The Country Code Dose not Exist";
                }
    }
                */
}