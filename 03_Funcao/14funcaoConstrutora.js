function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeActual = 0

    //Metodo publico
    this.acelerar = function (){
        if(velocidadeActual + delta <= velocidadeMaxima){
            velocidadeActual += delta
        }else{
            velocidadeActual = velocidadeMaxima
        }
    }

    //Metodo publico
    this.getVelocidadeActual = function(){
        return velocidadeActual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeActual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeActual())

console.log(typeof Carro)
console.log(typeof ferrari)
