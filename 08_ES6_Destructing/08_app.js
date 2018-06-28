/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6,
where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var employee = [1001, 'Naveen', 'Tech Lead'];
// from ES5
var eno = employee[0];
var ename = employee[1];
var edesg = employee[2];
// Destructing
var empno = employee[0], empname = employee[1], empdesg = employee[2];
var output = "EmpNo : " + empno + " EmpName : " + empname + " EmpDesg: " + empdesg;
console.log(output);
document.getElementById('display').innerHTML = output;
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
output = "a : " + a + " b : " + b;
console.log(output);
document.getElementById('display').innerHTML = output;
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    sname: 'Rajan',
    age: 25,
    course: 'Engineering'
};
var stdName = student.sname, stdAge = student.age, stdCourse = student.course;
output = "Student Name : " + stdName + " Student Age : " + stdAge + " StudentCourse : " + stdCourse;
console.log(output);
document.getElementById('display').innerHTML = output;
var _a;
