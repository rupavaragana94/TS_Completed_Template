// Hello World App
var greeting = "Good Morning";
document.getElementById('display').innerHTML = greeting;
// addition of two numbers
var a = 10;
var b = 20;
function sum(a, b) {
    return a + b;
}
var output = "The sum of a , b is : " + sum(a, b);
console.log(output);
document.getElementById('display').innerHTML = output;
