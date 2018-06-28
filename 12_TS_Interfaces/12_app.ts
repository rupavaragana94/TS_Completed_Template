// Create a Student Interface , and printStudent function
interface Student{
    name : string,
    age : number,
    course : string,
    address : {
        city : string,
        state : string,
        country : string
    }
}
function printStudent(student:Student):void{
    let output = `name : ${student.name} 
                  age : ${student.age}
                  course : ${student.course}
                  city : ${student.address.city}
                  state : ${student.address.state}
                  country : ${student.address.country}`;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}

let  student:Student = {
    name : 'John',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};

printStudent(student);



