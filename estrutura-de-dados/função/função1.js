/*function dobro (x=1,y=1) {
    alert("o dobro de "+ x + " é "+(x*2)+"\ne o dobro de "+y+" é "+(y*2))
    
}
dobro(2,3)

function objetocomoparametro(usuario) {
    usuario.nome
    usuario.endereco
    usuario.telefone
}
const dadosDoUsuario = {
    nome:"", 
    telefone:"",
    endereco:""
}
let objeto = {nome:2}
console.log(objeto.nome) */

// exercicio utilizando funtion
let areaT = 0
let areaR = 0
let areaQ = 0
let areaTrap = 0
let areaC = 0

function areaDoTriangulo() {
    base = prompt("informe a base")
    altura = prompt("informe a altura:")
    return  (altura * base)/2
}
function areaDoRetangulo(b,h) {
    areaR = b * h
}
function areaDoQuadrado(l) {
    areaQ = l*l
}
function areaDoTrap(baseMenor,baseMaior,h) {
    areaTrap = (baseMenor + baseMaior)*h/2
}
function areaDoCirculo(raio) {
    areaC = 3.14*raio*raio
}

let option = ""
function exibirmenu() {
    return prompt(" escolha qual operação deseja executar:\n\n1. Área do triângulo\n2. area do retângulo\n3. area do quadrado \n4. area do trapézio\n5. area do circulo") 
}
 do {
    option = exibirmenu()
    switch(option){
        case "1":
            alert(" o resultado é: "+ areaDoTriangulo())
            break
        case"2":
           base = prompt("informe a base:")
           altura = prompt("informe a altura:")
           areaDoRetangulo(base,altura)
           alert(areaR)
            break
        case "3":
            base = prompt("informe o lado do quadrado:")
            areaDoQuadrado(base)
            alert(areaQ)
            break
        case"4":
            let baseMenor = parseFloat( prompt("informe a base menor:"))
            let baseMaior = parseFloat( prompt("informe a base maior:"))
            altura = prompt("informe a altura:")
            areaDoTrap(baseMenor,baseMaior,altura)
            alert(areaTrap)
            break            
        case "5":
            base = prompt("informe o raio do circulo:")
            areaDoCirculo(base)
            alert(areaC)
            break    
        case "6":
            alert("saindo...")
            break
        default:
            alert("opção invalida")        
            break
    }      

 } while(option !== "6")

