let NamePilot = prompt("qual seu nome, piloto?")

let velocity = 0

 NewVelocity = prompt("A que velocidade você gostaria de acelerar, "+NamePilot+"?")
 if(NewVelocity)  { 
     velocity=NewVelocity
 }

let ConfirmVelocity = confirm("estamos acelerando para "+NewVelocity+ " km/h?")

if(ConfirmVelocity) { velocity=NewVelocity

    }
 if(velocity <= 0){
     alert("vc está parado. considere aumentar a velocidade.")
 }    
else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity >=40 && velocity < 80) {
    alert("parece uma boa velocidade para manter")
} else if(velocity >=80 && velocity <= 100) {
    alert("velocidade alta. Considere diminuir.")
} else if(velocity > 100){
    alert("velocidade perigosa. Controle automático forçado.")
}

alert(NamePilot+", a velocidade atual é "+velocity+" km/h")