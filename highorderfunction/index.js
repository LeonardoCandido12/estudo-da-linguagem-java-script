// função como parâmetro de uma outro função

function calcular(a , b, operação) {  // calcular é chamada de high order function
    console.log("realizando uma operação")
    const resultado = operação(a,b)
    return resultado
}

function somar(x,y) {
    console.log("realizando uma soma.")
    return x+y  
}
console.log(calcular(10,2,somar))

console.log(calcular(10,2,function (x,y) {
    console.log("realizando uma subtração")
    return x-y
    }
))