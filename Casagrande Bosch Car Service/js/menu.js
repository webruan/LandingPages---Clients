const button = document.getElementById('menu');
const body = document.querySelector('body');
const linkButton = document.querySelectorAll('.linkButton');

const icon = document.querySelector('.bi');
const modal = document.getElementById('menu-modal');

button.addEventListener('click', () => {
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
        
        modal.style.display = 'block';
        body.style.overflowY = 'hidden'; // prevent scrolling

    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');

        modal.style.display = 'none';
        body.style.overflow = 'auto'; // enable scrolling
    }
});

linkButton.forEach(title => {
    title.addEventListener('click', () => {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');

        modal.style.display = 'none';
        body.style.overflowY = 'auto'; // enable scrolling
    });
});


