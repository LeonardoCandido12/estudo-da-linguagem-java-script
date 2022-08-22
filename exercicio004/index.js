let DistaceIY = prompt("informe a distância em anos-luz.")

let ChooseOption = prompt(
    "Informe a nova unidade de medida :"+"\n1- Parsec(pc)"
    +"\n2- unidade astronómica(AU)"
    +"\n3- quilómetros(km)")
 switch(ChooseOption){
    case "1":
        let DistancePC = ChooseOption * 0.306601
        alert("distancia em Anos-Luz: "+ChooseOption+" l.y"
        +"\nconversão desejada: "+DistancePC+" parsec")
      break
    case "2":
        let DistaceAU = ChooseOption * 63241.1
        alert("distancia em Anos-Luz: "+ ChooseOption+" i.y"+"\nconversão desejada: "+DistaceAU+" AU")
      break    
    case "3":
        let DistanceKM = ChooseOption * 9.5 * Math.pow(10,12)
        alert("distancia em Anos-Luz: "+ChooseOption+" l.y"+"\nconversão desejada: "+DistanceKM+" Km")
      break    
    default:
        alert("distancia em anos-luz: "+ChooseOption+" l.y"+"\nunidade não identificada: conversão fora do escopo")
 }

