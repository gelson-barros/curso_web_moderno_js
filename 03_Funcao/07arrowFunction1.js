//origem
let dobro = function (a) {
    return 2 * a
}

//refactoração
dobro = (a) => {
    return 2 * a
}
//refactoração mais enchuta
dobro = a =>  2 * a// returno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'ola'
ola = _ => 'ola' //possui um parametro
console.log(ola())