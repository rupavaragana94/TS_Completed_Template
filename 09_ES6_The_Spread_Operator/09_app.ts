/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

//find the min value using spread operator
let array = [10,20,30,40,50];
let min_value = Math.min(...array);
let output = `The min value is : ${min_value}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// add some an array between another array
let arr1 = [30,40,50];
let array2 = [10,20,...arr1,60,70,80];
output = `The array2 values are : ${array2.join(' , ')}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// create a copy of an array
let abc = ['html','css','javascript','bootstrap'];
let def = [...abc]; // same as abc.slice()
output  = `The def array values are : ${def.join(' , ')}`;
console.log(output);
document.getElementById('display').innerHTML = output;


