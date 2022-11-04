let listaDeVagas = [] 

let candidatos = []

function listarvagas() {
    const vagasEmTexto = listaDeVagas.reduce(function(textofinal, vaga, indice){
        textofinal+= indice+". "
        textofinal+= vaga.nome
        textofinal+= "(" + vaga.candidatos.length + " candidatos)\n"
        return textofinal
    },"")
    alert(vagasEmTexto)
}
function criarvaga() {
    let NovaVaga = {}
    NovaVaga.nome = prompt("informe o nome para a vaga:");
    NovaVaga.descrição = prompt("informe uma descrição:");
    NovaVaga.datalimite = prompt("informe a data limete:(DD/MM/AAAA");
    NovaVaga.candidatos = []
    const confirmaçao = confirm("deseja salva esta vaga?\n nome:"+NovaVaga.nome+"\ndescrição: "+NovaVaga.descrição+"\ndata limite: "+NovaVaga.datalimite)
    if(confirmaçao){
         listaDeVagas.push(NovaVaga)
         alert("vaga criada")
    }else{alert("voltando ao menu...")}   
}
function exibirvaga() {
    const indice = prompt("informe o indice da vaga:")
    const vaga = listaDeVagas[indice]
    const vagatexto = "indice: "+indice+"\nnome: "+vaga.nome+"\ndescrição: "+vaga.descrição+"\n data limite: "+vaga.datalimite+"\nquantidade de candidatos: "+vaga.candidatos.length+"\ncandidatos: "+vaga.candidatos
    return alert(vagatexto)    
    }
function InscreverCandidato(){
    let canditado = prompt("informe o nome o candidato:")
    const indic = prompt("qual indice da vaga desejada?")
    const confirmacao = confirm("deseja  inscrever-se nesta vaga:\n nome: "+listaDeVagas[indic].nome+"\ndescrição: "+listaDeVagas[indic].descrição+"\ndata limite: "+listaDeVagas[indic].datalimite)
    if(confirmacao){
        listaDeVagas[indic].candidatos.push(canditado)
        alert("candidato inscrito")
    }else{
        alert("inscrição não realizada")
    }
}    
function excluirVaga(){
    const indice3 = parseFloat (prompt("informe o indice da vaga que deseja excluir:"))
    const vagaExcluida = listaDeVagas[indice3]
    const confirmaçao3 = confirm("deseja excluir a vaga: "+indice3+"\nnome: "+vagaExcluida.nome+"\ndescrição: "+vagaExcluida.descrição+"\ndata limite: "+vagaExcluida.datalimite)
    if(confirmaçao3){
       listaDeVagas.slice() 
    }   
}
function executar() {
    let option = "";
    do{
        option = prompt("Opções disponiveis:\n 1. Listar vagas disponiveis \n 2. Criar uma nova vaga \n 3. Visualizar uma vaga \n 4. Inscrever um candidato \n 5. Excluir uma vaga \n 6. Sair");
        switch (option) {
            case "1":
                listarvagas();
                break;
            case "2":
                criarvaga();
                break;
            case "3":
                exibirvaga()

                break;
            case "4":
                InscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":
                alert("saindo...")
                break;                    
            default:
                alert("opção invalida")
                break;
        }

    }while(option !== "6")
    }

    executar()