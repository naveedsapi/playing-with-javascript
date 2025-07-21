


let txtday = document.getElementById("txtday");
let day= txtday.value;
let txtmonth = document.getElementById("txtmonth");
let month=txtmonth.value;
let txtcountry = document.getElementById("txtcountry");
let country=txtcountry.value;

let labelday = document.getElementById("labelday");
let labelmonth = document.getElementById("labelmonth");
let labelcountry = document.getElementById("labelcountry");

let btnday=document.getElementById("btnday");
let btnmonth= document.getElementById("btnmonth");
let btncountry = document.getElementById("btncountry");


btnday.onclick = function(){

    switch(day){

          case day = 1 :
           labelday.textContent="Monday";
          break;
          case day = 2 :
            labelday.textContent="Tuesday";
            break;
              case day = 3 :
            labelday.textContent="Wensday";
            break;
            default:
                {
                    labelday.textContent="Please Enter The Day of Week!";
                }
    }
}


btnmonth.onclick = function(){

    switch(month){

        case month = 1:
        labelmonth.textContent="Janvery";
        break;
        case month = 2:
            labelmonth.textContent="Febervery";
            break;
            default:
                {
                    labelmonth.textContent="Please Enter the Month";
                }
    }
}


btncountry.onclick = function(){

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
}