
// we are Practsing Array
//Array = a variable like structure that can hold more than 1 value
let fruits = ["apple","orange","banane","coconut"];
 


/*

fruits[3] = "Mango"; // index of array 

console.log(fruits[0]);

fruits.push("coconut"); // to Element into array
fruits.pop();            // to remove last Element
fruits.unshift("mango"); // assign at the beginnen of array
fruits.shift();          // to remvoe from the beginnen of array


let numOffruits = fruits .length; // lenght of array 
let index = fruits.indexOf("orange"); // index of array

console.log(index);
console.log(numOffruits);


  for(let fruit of fruits){
    console.log(fruit);
  }
  
*/
 //fruits.sort().reverse(); to revers order array
//fruits.sort(); to order of array in A to z
  for(let i=0; i< fruits.length; i++){
         console.log( fruits[i]);
  }

 /*

  // Spread Operator = ... allows an iterable such as an array of string to be 
  //                         expanded into separate elements 
  //                           (unpackes the elements)
 


  let numbers = [1,2,3,4,5];
  let maxnum = Math.max(...numbers);
  let mininum =Math.min(...numbers);
 // console.log(numbers);
  // console.log(maxnum);
  console.log(mininum);
  let username = "Bro Code ";
  let letters = [...username].join(" ");
  console.log(letters);
 
  
  let fruitssp = ["apple", "orange", "banans"];
  let vegtables = ["Carrots","celery","potatos"];

  let foods = [...fruitssp, ...vegtables, "eggs", "milk"];
  console.log(foods);
   */


  // rest parameters = (... rest) allow a function work with a variable number of argument by 
  //                      by bundling them into an array.

  //                     Spread = expands an array into separate elements
  //                      reset = bunles seperats element into an array
  /*
   

    function sum(...numbrs){
        let result = 0;
        for(let number of numbrs){
            result +=number;
        }
        return result;
    }
    //const total = sum(1,2,3,4,5);
    console.log("Your total is $"+total);

     function getAverage(...numbrs){
        let result = 0;
        for(let number of numbrs){
            result += number;
        }
        return result / numbrs.length;
         const total = getAverage(100,72,80,90 ,50);
    console.log(total);
    }

*/

   

    function combeinStrings(...strings){
    return strings.join(" ");
   }
    
   const fullName = combeinStrings("Mr","Spangbob", "Squerpants", "III");
    console.log(fullName);

