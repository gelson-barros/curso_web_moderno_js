const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado(10))
console.log(resultado(5))

let nota = 10
const status = nota>= 7 ? 'Aprovado' : 'Reprovado'

console.log(status)