function show(){
    const contactlist = document.getElementById('contact-list')
    console.log(contactlist)

    const list = document.getElementsByTagName('li')
    console.log(list)

    const classlist = document.getElementsByClassName('contact-input')
    console.log(classlist)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)
    
    const selectorlabel = document.querySelectorAll('#contact-list > li > label')
    console.log(selectorlabel)

    const firstcontact = document.querySelector('#contact-list > li > label')
    console.log(firstcontact)
}

