// 1º let e const 
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);
// console.log(b);//não está neste escope de bloco

//2º Template String
const produto = 'iPad'
console.log(`${produto} 
é 
caro`)

//3º Destructuring
const [l, e, ...tras] = "cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome} = {nome: 'Ana', idade: 32}
console.log(i, nome)