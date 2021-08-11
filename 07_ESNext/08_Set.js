// não aceita repetição/ não indexada
const times = new Set();

times.add("1º de Agosto");
times.add("Petro").add("Santa Rita").add("Progresso");
times.add("Interclube");
times.add("1º de Agosto");

console.log(times);
console.log(times.size)
console.log(times.has("1º de Agosto"));
console.log(times.has("De Agosto"));
times.delete('De Agosto')
console.log(times.has("De Agosto"));


const nomes  = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomeSet = new Set(nomes);
console.log(nomeSet)