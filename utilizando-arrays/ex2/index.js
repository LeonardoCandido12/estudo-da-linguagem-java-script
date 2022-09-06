let cartas = []
let option =""
do{
    option = prompt("cartas disponiveis:\n"+cartas.length+"\n(1) adicionar carta\n(2) puxar uma carta\n(3) sair")
    switch(option){
        case "1":
            let newcarta = prompt("informe o nome da carta:")
            cartas.unshift(newcarta)
            break
        case "2":
            let cartaRetirada = cartas.shift()    
            alert(cartaRetirada + "foi retirada")
            break
        default:
            alert("opção invalida")    
    }
} while(option !== "3")