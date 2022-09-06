let list = []
let menu = ""

do { 
    let paciente = ""

    for (let i = 0 ; i < list.length; i++){
        paciente += (i+1) + "º - "+list[i]+"\n"
    }
     menu = prompt("Lista de pacientes:\n"+paciente+"\n(1) adicionar paciente a fila\n(2) consultar paciente\n(3) sair")

    switch(menu){
    case "1":
        let menu1 = prompt("informe o nome do paciente:")
        list.push(menu1)
        alert(menu1 + " adicionado a fila")
        break
    case "2":
        let pacienteConsultado = list.shift()
        if(typeof pacienteConsultado === "string"){
            alert(pacienteConsultado + " removido da fila")
         }else{alert("não há pacientes na fila")}
        break
    case "3" :
        alert("encerrando...")    
        break
    default:
        alert("opção invalida")      
    }
}  while(menu !== "3")