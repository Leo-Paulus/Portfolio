function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.style.transition= '0.5s';
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

/*TODO: when the hamburger nav is present, the sun doesn't change to moon. */
function toggleMode() {
    const toggle = document.querySelector('.toggleDark');
    const body = document.querySelector('body');
    const menuLinks = document.querySelector('.menu-links');
    const links = document.querySelectorAll('a');
    const sc = document.getElementById('socials-container');
    const hamburgerSpans = document.querySelectorAll('.hamburger-icon span');
    const scDark = document.getElementById('socials-container-dark');
    toggle.classList.toggle('bi-moon');
        if(toggle.classList.toggle('bi-brightness-high-fill')){
            body.style.background = 'white';
            body.style.transition = '2s';
            body.style.color = 'black';
            links.forEach(link => link.style.color = 'black');
            links.forEach(link => link.style.transition = '2s');
            menuLinks.style.background = 'white';
            scDark.style.display = 'block';
            sc.style.display = 'none';
            hamburgerSpans.forEach(span => span.style.background = 'black');
            hamburgerSpans.forEach(span => span.style.transition = '0s');
            
        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
            links.forEach(link => link.style.color = 'white');
            links.forEach(link => link.style.transition = '2s');
            menuLinks.style.transition= '2s';
            menuLinks.style.background = 'black';
            scDark.style.display = 'none';
            sc.style.display = 'block';
            hamburgerSpans.forEach(span => span.style.background = 'white');
            hamburgerSpans.forEach(span => span.style.transition = '0s');
            
        }
}
