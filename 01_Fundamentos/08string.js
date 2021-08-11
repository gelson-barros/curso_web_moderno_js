const escola = "Cod3r"

console.log(escola.charAt(4))//tras o valor no indice
console.log(escola.charAt(5))
console.log(escola.length)
console.log(escola.charCodeAt(3))//tras numero da tabela unicode
console.log(escola.indexOf('d'))
console.log(escola.substring(1))
console.log(escola.substring(0, -1))
console.log('Escola '.concat(escola).concat("!"))
console.log("Escola "+ escola + "!");
/*
literal é um dado que não armazenas na variavel e trabalhas com ele assim exemplo 'Escola'
*/
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))