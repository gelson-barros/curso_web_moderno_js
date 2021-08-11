const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

// filtrar todos funcionario de nacionalidade chinesa
const chineses = (f) => f.pais === "China";

// filtrar todas mulher
const mulheres = (f) => f.genero === "F";

// filtrar o menor salario
const menorSalario = (func, funcActual) => {
    return func.salario < funcActual.salario ? func : funcActual;
};

axios.get(url).then((response) => {
    const funcionarios = response.data;
    // console.log(funcionarios);

    //mulher chinesa com menor salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    // const mulherChinesaComMenorSalario = funcionarios.filter(funcionario => {
    //     return ((funcionario.pais === 'China') && (funcionario.genero === 'F') && (funcionario.salario < 2445))
    // })
    console.log(func);
});
