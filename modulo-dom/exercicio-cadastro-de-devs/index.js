
function createInput(ev){
    ev.preventDefault()
    const form = document.getElementById('form')
    const inputTec = document.createElement('input')
    inputTec.type = 'text'
    form.appendChild(inputTec)
}