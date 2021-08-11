// Object.preventExtensions-> previne que seu objecto não seja extendido ou seja não consegue aumentar o numero de atributos(podes ate excluir atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal (seal = selar ou fechar ) -> nao consegue adicionar, excluir atributos mas podes modificar os valores
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze-> selado e com valores constantes ou seja não consegues exluir, adicionar atributos bem como os valores deste atributos