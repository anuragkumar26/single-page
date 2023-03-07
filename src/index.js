const toggleBtn = document.querySelector("#toggleNav");
const navMenu = document.querySelector("#nav-menu");
let menu = document.querySelector("ul.nav-menu");

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('show');
});

menu.addEventListener(('click'), (e) => {
    let elems = menu.querySelectorAll('.active');
    [].forEach.call(elems, (el)=> {
        el.classList.remove('active')
    });
    e.target.classList = 'nav-link active';
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('show');
});