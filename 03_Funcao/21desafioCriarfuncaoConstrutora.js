//Com classe

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
/*
testando no browser os associar com classe
document.getElementsByTagName('body')[0].onclick = p1.falar
no clique vêm  Meu nome é undefined
*/


//Com função construtora
function CriarPessoa(nome) {
    //let nomePessoa = nome;
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    };
}

const p3 = new CriarPessoa("João");
p3.falar();

/*
testando no browser e associar com funcao construtora
document.getElementsByTagName('body')[0].onclick = p3.falar
no clique vêm  Meu nome é João
*/