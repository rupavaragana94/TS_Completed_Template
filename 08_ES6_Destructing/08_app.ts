/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6,
where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let employee = [1001,'Naveen','Tech Lead'];
// from ES5
let eno =  employee[0];
let ename = employee[1];
let edesg = employee[2];

// Destructing
let [empno,empname , empdesg] = employee;
let output = `EmpNo : ${empno} EmpName : ${empname} EmpDesg: ${empdesg}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Usage of Destructing to exchange the values of two vars
let a:number = 10;
let b:number = 20;

[a , b] = [b , a];

output = `a : ${a} b : ${b}`;
console.log(output);
document.getElementById('display').innerHTML = output;

// Usage of Destructing to assign each variable of an Object to other vars
let student = {
    sname : 'Rajan',
    age : 25,
    course : 'Engineering'
};

let { sname:stdName , age:stdAge , course:stdCourse } = student;

output = `Student Name : ${stdName} Student Age : ${stdAge} 
                                                StudentCourse : ${stdCourse}`;
console.log(output);
document.getElementById('display').innerHTML = output;
