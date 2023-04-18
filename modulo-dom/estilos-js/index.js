function useLightTheme(){
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#f7f1f1'
}

function useDarkTheme(){
    document.body.style.color = '#f7f1f1'
    document.body.style.backgroundColor = '#000000'
}

function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')

}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)