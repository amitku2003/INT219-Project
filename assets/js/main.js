const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
}
addEventListener('scroll', blurHeader);


const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")
const sendEmail = (e) => {
    e.preventDefault();
    const params = {
        name: document.getElementById("user_name").value,
        email: document.getElementById("user_email").value,
        project: document.getElementById("user_project").value
    }
    emailjs.send('service_56ykzvf', 'template_2r5513l', params)
    .then(() => {
        contactMessage.textContent = 'Message sent successfully!!'
        setTimeout(() => {
            contactMessage.textContent=""
        }, 5000);
        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Message not sent (service error)!!'
    })
}

contactForm.addEventListener('submit', sendEmail);


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
addEventListener('scroll', scrollActive);

const colorM = document.getElementById('color__change');

const colorMode = () => {
    document.getElementById('moon').classList.toggle('deactive');
    document.getElementById('sun').classList.toggle('deactive');
    document.body.classList.toggle('light');
}

colorM.addEventListener('click', colorMode);

const sr=ScrollReveal({
    origin: 'top', distance: '60px', duration: 1000, delay:100
})
sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', {origin: 'bottom'});
sr.reveal('.about__data, .skills__data', {origin: 'left'});
sr.reveal('.about__image, .skills__content', {origin: 'right'});
sr.reveal('.services__card, .projects__card', {interval: 100});

// Color Change

const colors = ["orange", "blue", "pink", "green", "purple"];
let cc = 0;
const changeColor = () => {
    document.body.classList.add(colors[cc]);
    for(let i=0; i<5; i++){
        if(i!=cc) document.body.classList.remove(colors[i]);
    }
    cc++;
    if (cc == 5) cc = 0;
}

document.getElementById("color__pallet").addEventListener("click", changeColor);
