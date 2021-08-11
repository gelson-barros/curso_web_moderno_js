const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40//evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    Obj:{
        fala: 'blabla',
        obj:{
            fala: 'blabla'
        }
    }
}
prod2['Desconto Legal'] = 0.40//evitar atributos com espaço

//'{"nome": "Camisa Polo", "preco": 79.90}'//JSON

console.log(prod2)