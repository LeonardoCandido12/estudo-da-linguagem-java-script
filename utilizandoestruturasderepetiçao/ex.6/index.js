let AvailableMoney = parseFloat(prompt("qual a quantia disponível no momento"))

let ChoseOption = ""
do {
    ChoseOption = prompt("A quantia atual é "+ AvailableMoney +".\n(1) adicionar mais dinheiro\n(2) retirar dinheiro\n(3) finalizar programa")

    switch(ChoseOption){
        case "1":
            AvailableMoney  += parseFloat(prompt("Quanto deseja adicinar"))
          break  
        case "2":
            AvailableMoney -= parseFloat(prompt("informe a quantia que deseja retirar:")) 
          break  
        case :
            alert("opção invalida")
    }
} while (ChoseOption !== "3")

