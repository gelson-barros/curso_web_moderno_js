const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana',nota: 8.7, bolsista: true}
]

//desafio 1: todos os alunos são bolsista?
//const resultado = alunos.map(a=>a.bolsista).reduce(function(acumulador, actual){
//    return acumulador && actual;
//})
//console.log(resultado)
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//dasafio 2: algum alunos é bolsistas?
//const resultado1 = alunos.map(a=>a.bolsista).reduce(function(acumulador, actual){
//    return acumulador || actual;
//})
//console.log(resultado1);
const algunsBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsista))