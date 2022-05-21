let departureDateEntry = prompt("informe a data de partida(DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt("escolha como quer exibir o tempo de partida"+"\n1-segundos"+"\n2-minutos"+"\n3-horas"+"\n4-dias"+"\n5-anos")
if(choseOption == 1) {
    let SecondsOfDeparture = Math.round(dateDiff / 1000) 
    alert("tempo de voo: "+SecondsOfDeparture+" segundos")
} else if(choseOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60 )
    alert("tempo de voo: "+minutesOfDeparture+" minutos")
}  else if(choseOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 60 / 60)
    alert("tempo de voo: "+hoursOfDeparture+" horas")
}  else if(choseOption == 4){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 60 / 60 / 24)
    alert("tempo de voo: "+daysOfDeparture+" dias")
} else if(choseOption == 5){
    let yearsOfDeparture = Math.round(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12)
    alert("tempo de voo: "+ yearsOfDeparture+" anos")
} else {alert("opção invalida")}











