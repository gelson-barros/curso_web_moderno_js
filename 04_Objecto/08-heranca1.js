const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype)//prototype nao é uma propriedade de objecto mas de funcao
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//objecto criado com notacao literal e o new Object
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjecto(){}
console.log(typeof Object, typeof MeuObjecto)
console.log(Object.prototype,  MeuObjecto.prototype)