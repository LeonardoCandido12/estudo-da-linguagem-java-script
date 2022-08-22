let navname = prompt("informe o nome da nave")

let ReplaceCharacter = prompt("qual caracter deseja substituir?")

let newCharacter = prompt("por qual caracter deseja substituir?")

let newnavname = ""

for( let i = 0 ; i < navname.length ; i = i + 1){
    if(navname[i] == ReplaceCharacter){
        newnavname =  newnavname + newCharacter 
    } else{
        newnavname = newnavname + navname[i] 
    }
}
alert("o nome da nave é "+newnavname)