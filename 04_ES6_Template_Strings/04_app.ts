/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/



/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager'
};

let strConcat = "<div style='background-color: orange'>" +
                    "<h1>" + employee.name +"</h1>" +
                    "<h1>" + employee.age +"</h1>" +
                    "<h1>" + employee.designation +"</h1>" +
                 "</div>";

document.getElementById('container').innerHTML = strConcat;

let templateStr = `<div style="background-color: purple">
                        <h1>${employee.name}</h1>
                        <h1>${employee.age}</h1>
                        <h1>${employee.designation}</h1>
                    </div>`;

document.getElementById('container').innerHTML = templateStr;



