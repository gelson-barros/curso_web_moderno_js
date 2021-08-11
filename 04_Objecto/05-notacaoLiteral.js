const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}//antigo
const obj2 = {a, b, c}//actualizado

console.log(obj1, obj2)

//###############

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // antigo
obj4 = {[nomeAttr]: valorAttr}// actualizado
console.log(obj3, obj4)

const obj5 = {
    funcao1: function(){//antigo
        //...
    },
    funcao2(){//actualizado
        //...
    }
}

console.log(obj5)