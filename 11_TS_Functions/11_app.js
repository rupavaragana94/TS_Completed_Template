// Create a simple function to add two numbers
function sum(a, b) {
    var sum = a + b;
    return sum;
}
var output = "The Sum of a , b is " + sum(10, 20);
console.log(output);
document.getElementById('display').innerHTML = output;
// Create the same add function with first number as 'any' type
function add(a, b) {
    var sum = 0;
    if (typeof a === "string") {
        if (isNaN(parseInt(a, 10))) {
            a = 0;
        }
        else {
            a = parseInt(a, 10);
        }
        sum = a + b;
    }
    else if (typeof a === 'number') {
        sum = a + b;
    }
    else {
        a = 0;
        sum = a + b;
    }
    return sum;
}
output = "The Addition of a , b is : " + add([10, 20], 30);
console.log(output);
document.getElementById('display').innerHTML = output;
function findMax(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
output = "The Big value of a : " + findMax(10);
output = "The Big value of a , b : " + findMax(10, 20);
output = "The Big value of a , b , c  : " + findMax(10, 20, 30);
//We cannot pass the 4 parameters
//output = `The Big value of a , b , c  : ${findMax(10,20,30,40)}`;
console.log(output);
document.getElementById('display').innerHTML = output;
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
function createEmployee(name, age, designation, salary) {
    var emp = {
        name: name,
        age: age,
        designation: designation,
        salary: salary
    };
    return emp;
}
var employee = createEmployee('Williams', 40, 'Sales Manager', 75000);
output = "name : " + employee.name + " age : " + employee.age + " \n          designation : " + employee.designation + " Salary : " + employee.salary;
console.log(output);
document.getElementById('display').innerHTML = output;
