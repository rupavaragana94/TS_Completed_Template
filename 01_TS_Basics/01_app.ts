// Hello World App

let greeting:string = "Good Morning";
document.getElementById('display').innerHTML = greeting;


// addition of two numbers

let a:number = 10;
let b:number = 20;

function sum(a:number,b:number):number{
    return a + b;
}

let output:string = "The sum of a , b is : " + sum(a,b);
console.log(output);
document.getElementById('display').innerHTML = output;



