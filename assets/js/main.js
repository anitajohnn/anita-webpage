const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))


const shadowlHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowlHeader)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_1njk6y9','template_50kwrp4','#contact-form','zNZmAZSG6jk4wUcc7')
    .then(()=>{
        contactMessage.textContent = 'Message sent successfully :)'

        setTimeout(()=> {
            contactMessage.textContact =''
        }, 5000)
        contactForm.reset()
    }, () =>{
        contactMessage.textContent='Message not sent (service error)'
    })

}
contactForm.addEventListener('submit', sendEmail)