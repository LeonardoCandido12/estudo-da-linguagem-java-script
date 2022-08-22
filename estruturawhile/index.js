let NameNav = prompt("informe o nome da nave.")
let choseoption = prompt("deseja entrar em dobra espacial?\n1 - sim\n2 - não")
let dobras = 0
while(choseoption == 1){
    dobras = dobras + 1
   choseoption =  prompt("deseja realizar a proxima dobra?\n1 - sim\n2 - não")
}
alert("nome:"+NameNav+"\ndoblas:"+dobras)
