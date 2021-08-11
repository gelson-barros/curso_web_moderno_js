/*
const a = {name: 'Teste'}
const b = a //passagem por referencia quando se trata de objecto como valor de uma variavel
b.name = 'Opa'
console.log(a.name)

let c = 3
let d = c
d++
console.log(d)
console.log(c)
//passgem por valores quando se trata dos tipos primitivos
*/

let valor //não inicializada
console.log(valor)//undefined
//console.log(valor2)//is not defined(quando nao declaraste e nem colocaste valor)
valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro:Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)//undefined
//console.log(produto.preco.a)//Error:Cannot read property 'a' of undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined// evite atribuir undefined de forma explicita
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null// sem preço
console.log(!!produto.preco)
console.log(produto)