const personagens = [
    {nivel:42,nome:"leo",raça:"orc",classe:"xãma"},
    {nivel:28,nome:"bruno",raça:"orc",classe:"guerreiro"},
    {nivel:35,nome:"vitor",raça:"guerreiro",classe:"paladino"},
    {nivel:26,nome:"cesar",raça:"humano",classe:"maga"},
    {nivel:39,nome:"samuel",raça:"elfo",classe:"paladino"},
    {nivel:97,nome:"joao",raça:"humano",classe:"maga"}   
]

// metodo map - cria um novo array

//const nomes = personagens.map(function(personagem) {
//    return personagem.nome
//})

//console.log(nomes)

// filter cria novo array com os elementos filtrados

//const orcs = personagens.filter(function(personagem){
  //  return personagem.raça === "orc"
//})

//console.log(orcs)


// metodo reduce - transformar um array em um outro valor

 const raças = personagens.reduce(function(valoracumulado, personagem){
    if(valoracumulado[personagem.raça]){
        valoracumulado[personagem.raça].push(personagem)
    }else {
        valoracumulado[personagem.raça] = [personagem]

    }
    return valoracumulado

 },{})

console.log(raças)

// metodo sort modifica o array original 

personagens.sort(function(a,b){
    return a.nivel - b.nivel
})

console.log(personagens)