function dobro (x=1,y=1) {
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
console.log(objeto.nome)