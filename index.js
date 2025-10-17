
/*Faulty calculator */

let random = Math.random()

let a = prompt("Enter the first number")
let c = prompt("Enter the operation")
let b = prompt("Enter the second number")

let obj = {
    "+": "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    
}
else{
    c = obj[c];
}