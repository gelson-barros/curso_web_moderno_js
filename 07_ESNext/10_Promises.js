function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(frase) // para then
            // reject(frase) // para catch
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))