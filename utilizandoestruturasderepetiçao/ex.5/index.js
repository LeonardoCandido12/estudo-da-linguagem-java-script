let turistName = prompt("informe o seu nome.")
let visitcity = prompt("você já visitou alguma cidade?\n(responda sim ou não)")
let whatcity = ""
let citys = ""
let cont = 0

while(visitcity == "sim" ){
    whatcity = prompt("qual cidade você visitou?")
    whatcity = "-" + whatcity + "\n"
    citys = citys + whatcity
    cont += 1
    visitcity = prompt("você ja visitou alguma outra cidade?\n(responda sim ou não)")
}
alert(turistName + ", você viajou para "+ cont +" cidades\n"+citys)
