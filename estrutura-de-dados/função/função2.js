let velocity = 0 
let nameNav = ""
function acelerar5km() { 
    let confirmação =  confirm("acelerar 5km/s?")
    if(confirmação){
        velocity += 5
        console.log(velocity)
    } else{alert("voltando ao menu...")}   
}
function desacelerar5km() {
      if(confirm("desacelerar 5km/s?")){
        if(velocity > 0){
            velocity -= 5
            console.log(velocity)
          }else {alert("a nave esta parada")
                 alert("voltando ao menu...")}
      }else{alert("voltando ao menu...")}
}

function exibirmenu() {
    return prompt(" ações disponiceis:\n\n1. acelerar 5km/s\n2. desalerar 5km/s\n 3. conferir dados da nave\n 4. sair do programa")
}

function exibirDados() {
    if(nameNav.length == 0){
        return alert("nome da nave: não informado\nvelocidade atual: "+velocity+" km/s")
    }else {return alert("nome da nave: "+nameNav+"\nvelocidade atual: "+velocity)
}   

}

function executar() {
    let option =""
    do{
        option = exibirmenu()
        switch(option) {
        case "1":
            acelerar5km()
            break;
        case "2":
            desacelerar5km()
            break
        case"3":
            exibirDados()
            break
        case "4":
            alert("saindo...")
            break    
        default:
            alert("opçao invalida")
            break;
        }
} while(option !== "4")
}
nameNav = prompt("informe o nome da nave?")
executar()