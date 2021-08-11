console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo"; //acrescentar elemento hardcore
//acrescenta elemento no fim no array
aprovados.push("Abia");
console.log(aprovados.length);

//colocando não colocando um indice na sequência criar lacunas de itens vazios(empty)
aprovados[9] = "Rafeal";
console.log(aprovados.length);
console.log(aprovados[8] === null); //false
console.log(aprovados[8] === undefined); //true

console.log(aprovados); //itens vazios
aprovados.sort(); //ordenar o array em ordem alfabetico
console.log(aprovados);

delete aprovados[1]; //exclui um elemento e nao ordenar
console.log(aprovados[1]);
console.log(aprovados);

aprovados = ['Bia', 'Carlos' ,'Ana']
//serve para remover ou adicionar, ou ainda as duas coias ao mesmo tempo
//aprovados.splice(1, 2);exluir
//excuir e adicionar
//aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
//adicionar
aprovados.splice(1, 0, "Elemento1", "Elemento2");
console.log(aprovados)
