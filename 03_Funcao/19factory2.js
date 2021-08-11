

function criarProduto(nome , preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 302))
console.log(criarProduto('SmartPhone', 243.4))



/*
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
        totalApagar(){
            return this.preco - this.preco * this.desconto
        }
    }
}

let notebook = criarProduto("Notebook", 302)
console.log(notebook.totalApagar())
*/