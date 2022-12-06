
function addplayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("escalar o jogador "+name+ " na posição " +position+"?")
    if(confirmation){
        const listplayes = document.getElementById('list-playes')
        const playerli = document.createElement('li')
        playerli.id = 'player-'+number 
        playerli.innerText = name+'( '+number+' ): '+position
        listplayes.appendChild(playerli)
        
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}