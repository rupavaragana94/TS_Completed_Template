/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (name === void 0) { name = 'Williams'; }
    if (age === void 0) { age = 30; }
    var output = "Hello " + name + " Good Morning You are " + age + " Years Old!! ";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
greet('Rajan', 35);
