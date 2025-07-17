
const decreaseBtn = document.getElementById("btnDeacriment");
const resetBtn = document.getElementById("btnReset");
const increaseBtn = document.getElementById("btnIncreamint");
const countlabel = document.getElementById("labelCounter");
let count = 0;
decreaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}

resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}

increaseBtn.onclick=function(){
  count--;
  countlabel.textContent=count;
}