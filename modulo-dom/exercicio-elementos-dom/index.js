
function addcontact(){
    const contactlist = document.getElementById('contacts-list')

    const h3g = document.getElementById('h3')
    h3.innerText = "bb"

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = 'nome:'
    const nameinput = document.createElement('input')
    nameinput.type = 'text'
    nameinput.name = 'fullname'

    nameli.appendChild(nameinput)
    ul.appendChild(nameli)
    
    const phoneli = document.createElement('li')
    phoneli.innerText = 'telefone:'
    const phoneinput = document.createElement('input')
    phoneinput.type = 'namber'
    phoneinput.name = 'phone'

    phoneli.appendChild(phoneinput)
    ul.appendChild(phoneli)

    const andressli = document.createElement('li')
    andressli.innerText = 'endereço:'
    const andressinput = document.createElement('input')
    andressinput.type = 'text'
    andressinput.name = 'andress'
    
    andressli.appendChild(andressinput)
    ul.appendChild(andressli)

    contactlist.append(h3, ul)
}
function removecontact (){
    const contactlist = document.getElementById('contacts-list')
    const titles = document.getElementsByTagName('h3')
    const uls = document.getElementsByTagName('ul')
    contactlist.removeChild(titles[titles.length-1])
    contactlist.removeChild(uls[uls.length-1])

}