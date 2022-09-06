let imoveis = []
let option = ""
do{
    option = prompt("imoveis disponiveis:"+imoveis.length+"\n(1) adicionar imovel\n (2) mostrar imoveis disponivei\n(3) sair")

    switch(option){
        case"1":
            let imovel = {}
            imovel.nomeproprietario = prompt("Qual o nome do proprietário?")
            imovel.quartos = prompt("Qual a quantidade de quartos?")
            imovel.banheiro = prompt("Qual a quantidade de banheiros?")
            imovel.garagem = prompt("Possui garagem?")
            let confirmação = confirm("deseja salvar esse imovel?")
            if(confirmação){
                imoveis.push(imovel)
                alert("imovel salvo")
            }else{alert("voltando ao menu")}

            break
        case"2":
            if(imoveis.length > 0){
            for(let i = 0 ; i<imoveis.length;i++){
                alert( "imovel "+(i+1)+"\n"+"nome do proprietario: "+imoveis[i].nomeproprietario+"\nquartos :"+imoveis[i].quartos+"\nbanheiros: "+imoveis[i].banheiro+"\ngaragem: "+imoveis[i].garagem)
            }}else{alert("não há imoveis disponiveis")}
            break    
        case"3":
            alert("saindo...")
            break
        default:
            alert("opção invalida")        
    }

}while(option !== "3")
console.log(imoveis)