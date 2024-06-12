document.getElementById('hamburger').addEventListener('click', function() {
    let navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

window.addEventListener('resize', ()=>{
    let navLinks = document.getElementById('navLinks');
    if(window.innerWidth > 768){
        navLinks.style.display = 'flex'
    }else{
        navLinks.style.display = 'none';
    }
})













