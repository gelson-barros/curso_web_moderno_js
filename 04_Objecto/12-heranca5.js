console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
//let  a = 'Escola Cod3r'.split('')
//console.log(a)
//a = a.reverse()
//console.log(a)
//a = a.join('')
//console.log(a)
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c' ].first())

//podes sobreecrever metodos existente que não é muito aconselhavel

String.prototype.toString = function(){//não faça isto
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())