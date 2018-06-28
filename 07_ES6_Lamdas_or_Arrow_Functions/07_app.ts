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
let greet = function():string {
    let greeting:string = "Good Morning";
    return greeting;
};

let output:string = greet();
console.log(output);
document.getElementById('display').innerHTML = output;

let greetArrow = () => "Good Morning from Arrow Function";
output = greetArrow();
console.log(output);
document.getElementById('display').innerHTML = output;

// Normal function with Args and Arrow Function
let greetArgs = function(name):string {
  return `Good Morning ${name}`;
};

output = greetArgs('Naveen');
console.log(output);
document.getElementById('display').innerHTML = output;

let greetArgsArrow = (name) => `${name}, I am From GreetArgs Arrow Function `;
output = greetArgsArrow('Rajan');
console.log(output);
document.getElementById('display').innerHTML = output;

// Normal function to find the sum of two numbers with Arrow Function
let sum = function(a , b):number {
    return a + b;
};

output = `The sum of a , b is : ${sum(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

let sumArrow = (a,b) => a + b;
output = `The Sum from Arrow function is : ${sumArrow(20,30)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

let movieLengthArrow = movies.map(movie => movie.length);
output = movieLengthArrow.join(' - ');
console.log(output);
document.getElementById('display').innerHTML = output;



