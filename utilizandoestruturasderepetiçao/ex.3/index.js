let namber = prompt("informe um numero")
let namber1 = parseFloat(namber)
let media = ""
let cont = 0
let soma = 0
if(namber1 != 99){
    while(namber1 != 99){
        cont = cont + 1
        soma = soma + namber1
        namber = prompt("informe um numero")
        namber1 = parseFloat(namber)
        media = soma / cont
    }
} else{
    media = "nenhum numero computado"

}
alert(media)