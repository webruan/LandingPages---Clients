document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const items = document.querySelectorAll('.item-material');
        const icons = document.querySelectorAll('.icon-material');
        const img = document.querySelector('#imagem');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                // Remove a classe active do item padrão
                document.querySelector('.selected').classList.remove('selected');

                // Adiciona a classe selected no item clicado
                item.classList.add('selected');

                // Altera a imagem
                const id = item.id;
                img.setAttribute('src', `./src/images/material/${id}.webp`);
            });
        });
    }, 5000);
});