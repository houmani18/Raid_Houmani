/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== CONTACT FORM =====*/

document.addEventListener("DOMContentLoaded", () => {
    let inputs = document.querySelectorAll(".forminput");
    inputs.forEach((input) => {
      let label = input.previousElementSibling;
      if (input.value.length !== 0) {
        moveLabelUp(label);
      }
      input.addEventListener("focus", function () {
        moveLabelUp(label);
      });
      input.addEventListener("blur", function () {
        if (this.value.length === 0) {
          moveLabelDown(label);
        }
      });
    });
  
    document.getElementById("submit").addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      } else {
        alert("Please fill in all fields.");
      }
    });
  
    function moveLabelUp(label) {
      if (label) {
        label.style.transform = "translateY(0px)";
        label.classList.add("labelstyle");
      }
    }
  
    function moveLabelDown(label) {
      if (label) {
        label.style.transform = "translateY(43px)";
        label.classList.remove("labelstyle");
      }
    }
  });
  