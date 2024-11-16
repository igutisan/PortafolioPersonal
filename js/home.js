const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')

})

const menuLinks = document.querySelectorAll('.links a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        //document.querySelector(".links .link a.selected").classList.remove("selected");
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.links a[href="#${id}"]`);

        if(entry.isIntersecting) {
         document.querySelector(".link a.selected").classList.remove("selected");
         menuLink.classList.add("selected");
        }
       
        
       
    });

}, {rootMargin: "-60% 0px -40% 0px"}
);


menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        toggle.classList.toggle('rotate')
        links.classList.remove('active')
        
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target) {
        observer.observe(target);
    }
})