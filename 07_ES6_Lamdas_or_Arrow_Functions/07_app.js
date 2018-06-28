/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
var greet = function () {
    var greeting = "Good Morning";
    return greeting;
};
var output = greet();
console.log(output);
document.getElementById('display').innerHTML = output;
var greetArrow = function () { return "Good Morning from Arrow Function"; };
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal function with Args and Arrow Function
var greetArgs = function (name) {
    return "Good Morning " + name;
};
output = greetArgs('Naveen');
console.log(output);
document.getElementById('display').innerHTML = output;
var greetArgsArrow = function (name) { return name + ", I am From GreetArgs Arrow Function "; };
output = greetArgsArrow('Rajan');
console.log(output);
document.getElementById('display').innerHTML = output;
// Normal function to find the sum of two numbers with Arrow Function
var sum = function (a, b) {
    return a + b;
};
output = "The sum of a , b is : " + sum(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
var sumArrow = function (a, b) { return a + b; };
output = "The Sum from Arrow function is : " + sumArrow(20, 30);
console.log(output);
document.getElementById('display').innerHTML = output;
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
output = movieLengthArrow.join(' - ');
console.log(output);
document.getElementById('display').innerHTML = output;
// Arrow Function for the above example
