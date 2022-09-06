// array dentro de outro array: [[]]
const array = ["nivel 1",["nivel 2"],[
    ["nivel 3, item1"],
    ["nivel 3, item2"]
]]
console.log(array)
console.log(array[2][0][0]) // nviel 3, item1

const matriz = [
    ["l1,c1","l1,c2","l1,c3"],
    ["l2,c1","l2,c2","l2,c3"],
    ["l3,c1","l3,c2","l3,c3"]
]
console.table(matriz)

//usar funçoes do array normalmente 

matriz[0].push("l1,c4") // -> indicar em qual posiçao deseja-se altera com[]
console.table(matriz)

// iterar sobre array dentro de array utilizando for

for(let i = 0; i < matriz.length;i++)
{
    for( let j = 0;j<matriz[0].length;j++)
    {
        let posição = "posição " + i + j + ": "+matriz[i][j]
        console.log(posição)
    }
}