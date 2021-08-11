const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
//retira o ultimo elemento do array
pilotos.pop();
console.log(pilotos);

//acrescentar no ultimo
pilotos.push("Verstappen");
console.log(pilotos);

//retira o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

//acrescenta no array no princípio
pilotos.unshift("Halmiton");
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Botas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);