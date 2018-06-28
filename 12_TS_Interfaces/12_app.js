function printStudent(student) {
    var output = "name : " + student.name + " \n                  age : " + student.age + "\n                  course : " + student.course + "\n                  city : " + student.address.city + "\n                  state : " + student.address.state + "\n                  country : " + student.address.country;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
var student = {
    name: 'John',
    age: 25,
    course: 'Engineering',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
};
printStudent(student);
