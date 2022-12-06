function addInput(){
    const ul = document.getElementById('inputs')

    const newli = document.createElement('li')
    newli.className = 'list-li'
    newli.innerText = 'novo input '

    const newinput = document.createElement('input')
    newinput.type = 'text'
    newinput.name = 'input'

    newli.appendChild(newinput)
    ul.appendChild(newli)
}
