const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//acrescentar no fim do array
console.log(valores)

console.log(valores.pop())//pop remove o valor do ultimo indice do array
delete valores[0]//remove tambem de acordo com o indice
console.log(valores);

console.log(typeof valores)