// Create a simple function to add two numbers
function sum(a:number, b:number):number{
    let sum:number = a + b;
    return sum;
}
let output:string = `The Sum of a , b is ${sum(10,20)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Create the same add function with first number as 'any' type
function add(a:any , b:number):number{
    let sum = 0;
    if(typeof a === "string"){
        if(isNaN(parseInt(a,10))){
            a = 0;
        }
        else{
            a = parseInt(a,10);
        }
        sum = a + b;
    }
    else if(typeof  a === 'number'){
        sum = a + b;
    }
    else{
        a = 0;
        sum = a + b;
    }
    return sum;
}
output = `The Addition of a , b is : ${add([10,20],30)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    if(b === undefined && c === undefined){
        return a;
    }
    else if(c === undefined){
        return Math.max(a,b);
    }
    else{
        return Math.max(a , b , c);
    }
}
output = `The Big value of a : ${findMax(10)}`;
output = `The Big value of a , b : ${findMax(10,20)}`;
output = `The Big value of a , b , c  : ${findMax(10,20,30)}`;
//We cannot pass the 4 parameters
//output = `The Big value of a , b , c  : ${findMax(10,20,30,40)}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Function Overloading in TypeScript , findMin using Math

// Create an Employee function and get an Employee Object
function createEmployee(name:string,age:number,designation:string,salary:number){
    let emp = {
        name : name,
        age : age,
        designation : designation,
        salary : salary
    };
    return emp;
}
let employee =
    createEmployee('Williams',40,'Sales Manager',75000);
output = `name : ${employee.name} age : ${employee.age} 
          designation : ${employee.designation} Salary : ${employee.salary}`;
console.log(output);
document.getElementById('display').innerHTML = output;