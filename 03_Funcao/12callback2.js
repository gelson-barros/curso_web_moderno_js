const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//sm callback
const notasBaixasEm7_1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixasEm7_1.push(notas[i]);
    }
}

console.log(notasBaixasEm7_1);

//com callback e funcao
const notasBaixasEm7_2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixasEm7_2)

//com callback e arrow
const notasBaixasEm7_3 = notas.filter((nota)=> nota < 7)
console.log(notasBaixasEm7_3)