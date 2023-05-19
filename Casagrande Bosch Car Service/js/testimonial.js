const testimonials = [
    { 
        name: "Erica A****", 
        text: "Excelente atendimento por parte de toda equipe, desde a recepção na oficina até o diagnóstico/resolução do problema. Muito ágeis para identificar o problema e rápidos no tempo de serviço. Estou bem impressionada pela qualidade no atendimento e serviço. Parabéns!!!!", 
        highlights: "Muito ágeis para identificar o problema",
        photo: "./src/images/feedback/erica.webp",
    },
    { 
        name: "Cristiane L****", 
        text: "Precisei de um atendimento com urgência e fui muito bem, atendida, com rapidez e eficiência. Tudo que foi feito foi explicado e demonstrado e os problemas foram todos solucionados. Recomendo.", 
        highlights: "Os problemas foram todos solucionados",
        photo: "./src/images/feedback/cristiane.webp",
    },
    { 
        name: "Glaucia R****", 
        text: "O grande diferencial dessa oficina é o atendimento diferenciado para mulheres. As vezes ficamos inseguras quando se trata de manutenção de carros e muitas vezes nos sentimentos enganadas e nessa oficina tive a segurança do serviço que estava sendo feito no meu carro.", 
        highlights: "Atendimento diferenciado para mulheres",
        photo: "./src/images/feedback/glaucia.webp",
    },
    { 
        name: "João S****", 
        text: "Um dos melhores lugares para levar o automóvel devido a qualidade no atendimento, rapidez, bom preço, espaço amplo, honestidade e dedicação. Parabéns o meu carro e os carros da empresa ficaram show!", 
        highlights: "Um dos melhores lugares para levar o automóvel",
        photo: "./src/images/feedback/joao.webp",
    }
];

function generateCarouselItems() {
    let carouselItemsHtml = '';
  
    const itemsToShow = 3;
    const middleItemIndex = Math.floor(testimonials.length / 2);
  
    // Define a partir de qual índice os itens devem ser gerados
    let startIndex = middleItemIndex - Math.floor(itemsToShow / 2);
    startIndex = Math.max(0, startIndex); // Garante que o índice não seja negativo
    startIndex = Math.min(testimonials.length - itemsToShow, startIndex); // Garante que o índice não ultrapasse o tamanho do array
  
    for (let i = startIndex; i < startIndex + itemsToShow && i < testimonials.length; i++) {
      const testimonial = testimonials[i];
      const classess = i === middleItemIndex ? 'active' : 'blur';
  
      // Ajusta a posição do item em relação ao índice central
      const itemPosition = i - middleItemIndex + Math.floor(itemsToShow / 2);

      carouselItemsHtml += `
            <div class="card ${classess}">
                <div class="row">
                    <i class="bi bi-quote"></i>

                    <div class="column">
                        <h6>${testimonial.highlights}</h6>

                        <p>${testimonial.text}</p>

                        <div class="infos">
                            <div class="row">
                                <div class="img">
                                    <img src="${testimonial.photo}" alt="Foto">
                                </div>

                                <div class="column">
                                    <small>${testimonial.name}</small>

                                    <div class="row">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <i class="bi bi-quote"></i>
                </div>
            </div>
        `;
    }    
    document.getElementById('testimonials').innerHTML = carouselItemsHtml;
};

function generatePaginationDots() {
    const dotsContainer = document.querySelector('.feedback-dots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < testimonials.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }

    dotsContainer.querySelector('.dot').classList.add('active');
}

generatePaginationDots();

// Gere os itens do carrossel pela primeira vez
generateCarouselItems();

function goToNextFeedback() {
    testimonials.push(testimonials.shift());
    generateCarouselItems();
    updateActiveDot();
}

function goToPreviousFeedback() {
    testimonials.unshift(testimonials.pop());
    generateCarouselItems();
    updateActiveDot();
}

document.querySelector('.arrow-left').addEventListener('click', goToPreviousFeedback);
document.querySelector('.arrow-right').addEventListener('click', goToNextFeedback);

function updateActiveDot() {
    const activeDot = document.querySelector('.dot.active');
    const newActiveDotIndex = (parseInt(activeDot.dataset.index) + 1) % testimonials.length;
    activeDot.classList.remove('active');
    document.querySelector(`.dot[data-index="${newActiveDotIndex}"]`).classList.add('active');
}

function rotateFeedbacks() {
    testimonials.push(testimonials.shift());
    generateCarouselItems();
    updateActiveDot();
}

// Defina o intervalo de rotação em milissegundos
const rotationInterval = 6000;

// Inicie o setInterval
setInterval(rotateFeedbacks, rotationInterval);