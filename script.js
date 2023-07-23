function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

/*TODO: when the hamburger nav is present, the sun doesn't change to moon. */
function toggleMode() {
    const toggle = document.querySelector('.toggleDark');
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.menu-links');
    const links = document.querySelectorAll('a');
    toggle.classList.toggle('bi-moon');
        if(toggle.classList.toggle('bi-brightness-high-fill')){
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            links.forEach(link => link.style.color = 'black');
            links.forEach(link => link.style.transition = '2s');
            hamburger.style.background = 'white';
            hamburger.style.transition = '2s';
        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
            links.forEach(link => link.style.color = 'white');
            links.forEach(link => link.style.transition = '2s');
            hamburger.style.transition = '2s';
            hamburger.style.background = 'black';

            
        }
}
