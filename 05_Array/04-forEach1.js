const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice, oArray) {
    console.log(`${indice + 1} ${nome}`);
    console.log(oArray);
});
console.log("----------");
aprovados.forEach((nome) => console.log(nome));
console.log("----------");

const exibirAprovados = (aprovado ) => console.log(aprovado);
aprovados.forEach(exibirAprovados);

//a função callback do forEach recebe três paramentros forEach(nome, indice, array  )
