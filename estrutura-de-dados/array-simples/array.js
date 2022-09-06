const array = [2,3,4,5]

// adicionar elementos
// push - add elemento no final

array.push(6)

// unshift
// add elemento no inicio
array.unshift(1)

// remove elementos
// pop - remove o ultimo elemento

let teste = array.pop()

// shift -  remover elementos do inicio

array.shift()
console.log(array)

//pesquisar por um elemento
// includes - retorna false ou true

let pesquisa = array.includes(3)
console.log(pesquisa)

// cortar e  concatenar
// slice - cortar

const numeros = array.slice(0,2)
console.log(numeros)

// concat - concatenar

let outros = [5,6,7,8]
numero = array.concat(outros,9,10)
console.log(numero)

//substituição dos elementos
//splice

let elementosremovidos = numero.splice(4,1,)


 console.log(elementosremovidos)
  numero.unshift(1)
  console.log(numero)

// iterar sobre os elementos
console.log(numero)

for( let elemento = 0 ; elemento < numero.length; elemento++){
    console.log(numero[elemento] + "esta na posição"+elemento)
}