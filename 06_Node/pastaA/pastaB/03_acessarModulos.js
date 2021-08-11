
const moduloA = require("../../01_moduloA");
console.log(moduloA.ola);

const saudacao = require('saudacao');
console.log(saudacao.ola);

// const c = require("./pastaC/index");//Pode ser este
const c = require("./pastaC");//Poder ser tambem este
console.log(c.ola2);

// module previamente instalado no core node
// const http = require('http'); 
// http.createServer((req, res) => {
//     res.write('Bom dia!');
//     res.end()
// }).listen(8080);
