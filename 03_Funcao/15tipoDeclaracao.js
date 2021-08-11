console.log(soma(5,6))//pode ser declarada antes

// fuction declaration
function soma(x, y){
    return x + y
}

//console.log(sub(7, 3))//não pode ser declarada antes
// function expression
const sub = function (x, y){
    return x - y 
}
console.log(sub(7, 3))

//console.log(mult(7, 3))/não pode ser declarada antes
// named function expression
const mult = function mult(x, y){
    return x * y 
}
console.log(mult(7, 3))