/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let languages:Array<string> = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];

let output:string = "";

for(let index in languages){
    let value = languages[index];
    output += ` ${value} `;
}
document.getElementById('display').innerHTML = output;

// Usage of for...of loop from ES6

output = "";
for(let value of languages){
    output += ` ${value} , `;
}
document.getElementById('display').innerHTML = output;