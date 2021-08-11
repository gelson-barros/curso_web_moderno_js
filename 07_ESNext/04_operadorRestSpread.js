// operador ... rest[juntar]/spread[espalhar]
// usar rest com paramentro de função

// usar spread com objecto
const funcionario = {nome: 'Maria', salario: 12344.99}
const clone = {activo: true, ...funcionario}
console.log(clone)

// usuar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal)