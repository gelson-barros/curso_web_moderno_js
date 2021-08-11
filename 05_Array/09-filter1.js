const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
];

console.log(produtos.filter(function(p){
    return p.preco > 340
}))

let prodFragil = fragil => fragil.fragil;
let prod500 = prod => prod.preco > 500
let resultado = produtos.filter(prodFragil).filter(prod500)
console.log(resultado)