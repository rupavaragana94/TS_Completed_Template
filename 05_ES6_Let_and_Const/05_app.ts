/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside if block

var course = 'MPC';

if(course === 'MPC'){
    let dept = 'Engineering';
}

//We cannot access the variable declared inside if condition using 'let'
// var output = "The dept is : " + dept;

// Usage Const variable creation
const MONTH_NAME = 'January';

// We cannot re-assign the 'const' values

//MONTH_NAME = 'April';

