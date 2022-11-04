// metodo -> função atrelada a objeto

let pessoa = {
    nome:"issac",
    idade:26,
    dizerOla(){
        console.log("olá,mundo! meu nome é "+ this.nome)
    }
}
console.log(pessoa)
pessoa.dizerOla()