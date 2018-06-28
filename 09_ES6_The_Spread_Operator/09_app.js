/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//find the min value using spread operator
var array = [10, 20, 30, 40, 50];
var min_value = Math.min.apply(Math, array);
var output = "The min value is : " + min_value;
console.log(output);
document.getElementById('display').innerHTML = output;
// add some an array between another array
var arr1 = [30, 40, 50];
var array2 = [10, 20].concat(arr1, [60, 70, 80]);
output = "The array2 values are : " + array2.join(' , ');
console.log(output);
document.getElementById('display').innerHTML = output;
// create a copy of an array
var abc = ['html', 'css', 'javascript', 'bootstrap'];
var def = abc.slice(); // same as abc.slice()
output = "The def array values are : " + def.join(' , ');
console.log(output);
document.getElementById('display').innerHTML = output;
