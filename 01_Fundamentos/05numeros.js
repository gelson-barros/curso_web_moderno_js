const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
let media = total / (peso1 + peso2)

//numero com duas casa depois da virgula
console.log(media.toFixed(2))
//console.log(media.toString())//converter em string
//console.log(media.toString(2))//converter em binario
//console.log(typeof media)//mostrar o tipo
//console.log(typeof Number);