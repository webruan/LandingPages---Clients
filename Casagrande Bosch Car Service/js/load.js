const headerSection = document.getElementById('header');

function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}

function loadSection() {
    if (isElementVisible(headerSection)) {
        services =
        `
        <div class="container gradient services">
            <div class="content">
                <div class="column">
                    <div class="title">
                        <h2>Nossos serviços</h2>
                        <span class="decoration">Nossos serviços</span>
                    </div>

                    <div class="paragraph">
                        <p>Nós oferecemos uma ampla gama de serviços para manter seu carro em ótimo estado e garantir sua <span>segurança na estrada.</span> Oferecemos serviços completos de estética automotiva para manter seu carro <span>brilhando como novo.</span> Além disso, usamos apenas <span>peças de qualidade</span> para garantir reparos duradouros. Você pode confiar que seu carro está em boas mãos em nosso centro automotivo!</p>
                    </div>

                    <div class="column">
                        <div class="row up">
                            <div class="column">
                                <h6>Mecânica em geral</h6>
                                <p>Análise de falha com equipamentos de diagnóstico de última geração (KTS e Osciloscópio).</p>
                                <img src="./src/images/lines/line1.svg" alt="Linha de decoração">
                            </div>

                            <div class="column">
                                <h6>Elétrica e eletrônica</h6>
                                <p>Equipamento de teste de última geração: KTS 590. Profissionais especializados e capacitados.</p>
                                <img src="./src/images/lines/line2.svg" alt="Linha de decoração">
                            </div>

                            <div class="column">
                                <h6>Alinhamento e balanceamento</h6>
                                <p>Uso dos equipamentos de teste de última geração, além do extenso conhecimento de nossos mecânicos especializados.</p>
                                <img src="./src/images/lines/line3.svg" alt="Linha de decoração">
                            </div>
                        </div>

                        <div class="row mid">
                            <div class="img">
                                <picture>
                                    <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/jetta.webp">
                                    <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/jetta.webp">
                                    <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/jetta.webp">
                                    <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/jetta.webp">
                                    <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/jetta.webp">
                                    <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/jetta.webp">
                                    <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/jetta.webp">
                                    <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/jetta.webp">
                                    <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/jetta.webp">
                                    <img loading="lazy" src="./src/images/desktop/1400px/jetta.webp" alt="Jetta Branco">
                                </picture>
                            </div>
                        </div>

                        <div class="row down">
                            <div class="column">
                                <img src="./src/images/lines/line4.svg" alt="Linha de decoração">
                                <h6>Troca de óleo</h6>
                                <p>Método de sucção a vácuo com recipiente transparente com escala (Trocador de óleo Bosch)</p>
                            </div>

                            <div class="column">
                                <img src="./src/images/lines/line5.svg" alt="Linha de decoração">
                                <h6>Ar condicionado</h6>
                                <p>Substituição de fluido refrigerante, substituição do filtro de cabine e mais.</p>
                            </div>

                            <div class="column">
                                <img src="./src/images/lines/line6.svg" alt="Linha de decoração">
                                <h6>Amortecedores, pneus e suspensão</h6>
                                <p>Peças de reposição originais, teste de fluido e sangrador pneumático.</p>
                            </div>

                            <div class="column">
                                <img src="./src/images/lines/line7.svg" alt="Linha de decoração">
                                <h6>Bateria</h6>
                                <p>Troca, instalação e descarte correto da bateria antiga. Checagem de vida útil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        contacts =
        `
        <div class="container gradient contacts">
            <div class="content">
                <div class="column">
                    <div class="title">
                        <h2>Contatos</h2>
                        <span class="decoration">Contatos</span>
                    </div>

                    <div class="row">
                        <div class="item column">
                            <div class="decoration">
                                <div class="row">
                                    <i class="bi bi-whatsapp"></i>
                                    <h6>WhatsApp</h6>
                                </div>
                            </div>
                            <p><a href="tel:+11938023538">(11) 9 3802-3538</a></p>
                        </div>

                        <div class="item column">
                            <div class="decoration">
                                <div class="row">
                                    <i class="bi bi-telephone"></i>
                                    <h6>Telefone</h6>
                                </div>
                            </div>
                            <p><a href="tel:+1142205769">(11) 4220-5769</a></p>
                        </div>

                        <div class="item column">
                            <div class="decoration">
                                <div class="row">
                                    <i class="bi bi-instagram"></i>
                                    <h6>Instagram</h6>
                                </div>
                            </div>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/casagrandeboschcar/">@casagrandeboschcar</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `

        materials =
        `
        <div class="container materials">
            <div class="content">
                <div class="row">
                    <div class="column">
                        <div class="title">
                            <h3>Confira alguns de nossos materiais</h3>
                        </div>

                        <div class="paragraph">
                            <p>Criamos materiais exclusivos para mantê-lo atualizado sobre as mais recentes novidades da Bosch e garantir que seu carro esteja sempre seguro e protegido. Acesse mais materiais clicando no botão abaixo!</p>
                        </div>

                        <div class="button cta">
                            <button><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/casagrandeboschcar/">Ver mais</a></button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column">
                            <div class="item item-material" id="1">
                                <div class="row">
                                    <span class="bar" id="bar"></span>

                                    <h6>Tipos de gasolina</h6>

                                    <i class="bi bi-chevron-compact-right icon-material"></i>
                                </div>
                            </div>

                            <div class="item item-material" id="2">
                                <div class="row">
                                    <span class="bar" id="bar"></span>

                                    <h6>Dicas: Carro em dia</h6>

                                    <i class="bi bi-chevron-compact-right icon-material"></i>
                                </div>
                            </div>

                            <div class="item item-material" id="3">
                                <div class="row">
                                    <span class="bar" id="bar"></span>

                                    <h6>Porque a Bosch?</h6>

                                    <i class="bi bi-chevron-compact-right icon-material"></i>
                                </div>
                            </div>

                            <div class="item item-material selected" id="4">
                                <div class="row">
                                    <span class="bar" id="bar"></span>

                                    <h6>Fluidos de freio</h6>

                                    <i class="bi bi-chevron-compact-right icon-material"></i>
                                </div>
                            </div>

                            <div class="item item-material" id="5">
                                <div class="row">
                                    <span class="bar" id="bar"></span>

                                    <h6>Economizando combustível</h6>

                                    <i class="bi bi-chevron-compact-right icon-material"></i>
                                </div>
                            </div>

                            <div class="icon">
                                <i class="bi bi-chevron-compact-down"></i>
                            </div>
                        </div>

                        <div class="img">
                            <img id="imagem" src="./src/images/material/1.webp" alt="Dica da Bosch">
                        </div>
                    </div>

                    <div class="button cta">
                        <button><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/casagrandeboschcar/">Ver mais</a></button>
                    </div>
                </div>
            </div>
        </div>
        `;

        footer =
        `
        <div class="container gradient">
            <div class="content">
                <div class="row">
                    <div class="column">
                        <p>CNPJ: 44.407.170/0001-60</p>

                        <div class="column">
                            <div class="row">
                                <i class="bi bi-instagram"></i>
                                <p>@casagrandeboschcar</p>
                            </div>

                            <div class="row">
                                <i class="bi bi-whatsapp"></i>
                                <p>(11) 9 3802-3538</p>
                            </div>
                        </div>
                    </div>

                    <div class="img">
                        <picture>
                            <source media="(min-width: 1400px)" srcset="./src/images/desktop/1400px/footer-logo.webp">
                            <source media="(min-width: 1200px)" srcset="./src/images/desktop/1200px/footer-logo.webp">
                            <source media="(min-width: 992px)" srcset="./src/images/desktop/992px/footer-logo.webp">
                            <source media="(min-width: 768px)" srcset="./src/images/tablet/768px/footer-logo.webp">
                            <source media="(min-width: 576px)" srcset="./src/images/tablet/576px/footer-logo.webp">
                            <source media="(min-width: 480px)" srcset="./src/images/tablet/480px/footer-logo.webp">
                            <source media="(min-width: 414px)" srcset="./src/images/mobile/414px/footer-logo.webp">
                            <source media="(min-width: 376px)" srcset="./src/images/mobile/376px/footer-logo.webp">
                            <source media="(min-width: 320px)" srcset="./src/images/mobile/320px/footer-logo.webp">
                            <img loading="lazy" src="./src/images/desktop/1400px/footer-logo.webp" alt="Casagrande Bosch Car Service Logo">
                        </picture>
                    </div>

                    <div class="button">
                        <p><a target="_blank" rel="noopener noreferrer" href="./termos.html">Termos de uso</a> | <a target="_blank" rel="noopener noreferrer" href="./privacidade.html">Política de privacidade</a></p>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h5>Como nos encontrar:</h5>
                    </div>

                    <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.134542392183!2d-46.56072852512158!3d-23.63535227874907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cd4c6680a7d%3A0x1556ae23403f5e86!2sAv.%20Pres.%20Kennedy%2C%202653%20-%20Santa%20Paula%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009561-200!5e0!3m2!1spt-BR!2sbr!4v1683119956038!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div class="address">
                        <small>Av. Pres. Kennedy, 2653 - Santa Paula, São Caetano do Sul - SP, 09561-200</small>
                    </div>
                </div>

                <div class="copyright">
                    <small>Copyright 2023 © Todos os direitos reservados à Casagrande Bosch Car Service</small>
                </div>
            </div>
        </div>
        `;

        bootstrap =
        `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" integrity="sha512-ZnR2wlLbSbr8/c9AgLg3jQPAattCUImNsae6NHYnS9KrIwRdcY9DxFotXhNAKIKbAXlRnujIqUWoXXwqyFOeIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

        <script defer src="./js/jquery.js"></script>
        `
    }

    document.getElementById('services').innerHTML = services;
    document.getElementById('contacts').innerHTML = contacts;
    document.getElementById('materials').innerHTML = materials;
    document.getElementById('footer').innerHTML = footer;
    document.getElementById('bootstrap').innerHTML = bootstrap;

    window.removeEventListener('scroll', loadSection);
}

window.addEventListener('scroll', loadSection);