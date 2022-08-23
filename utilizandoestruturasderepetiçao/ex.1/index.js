let navname = prompt("informe o nome da nave")
let bannedcharacter = prompt("informe o caracter proibido")
let newnavname = ""
for(let i = navname.length - 1 ; i >= 0 ; i = i - 1){
   if(navname[i] != bannedcharacter){newnavname += navname[i]
} else{
    break
}alert(newnavname)
}
