let isActivo = false
console.log(isActivo)

isActivo = true
console.log(isActivo)

isActivo = 3
console.log(!!isActivo)

isActivo = 0
console.log(!!isActivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!(isActivo = true))
console.log(!!Infinity)
console.log(!!(isActivo = Infinity))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActivo = false))

console.log('Para finalizar... ')
console.log(!!('' || null || 0 || 'epa'))
console.log(('' || null || 0 || 'epa' || 123))
console.log(('' || null || 0 || '' || 123))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')