// document.addEventListener("DOMContentLoaded", function() {
//     let contentBlocks = [  
//         {    
//             title: "Petlove Saúde",
//             logo_path: "src/images/desktop/1400px/petlove-porto.webp",
//             plans: [
//                 {
//                     plan_name: 'Petlove Tranquilo',
//                     best_seller: false,
//                     benefits: [
//                         "Consulta generalista",
//                         "Consulta Pet Home",
//                         "Vacinas importadas",
//                         "Urgência & emergência",
//                         "Exames laboratoriais",
//                         "Exames de imagem",
//                         "Funeral/cremação",
//                     ],
//                     price: "44",
//                     price_cents: "91*",
//                     description: "*Valor com 10% de desconto <span>Cartão Porto</span>",
//                     color: "#49A971"    
//                 },
//                 {
//                     plan_name: 'Petlove Ideal',
//                     best_seller: false,
//                     benefits: [
//                         "Consulta generalista",
//                         "Consulta Pet Home",
//                         "Vacinas importadas",
//                         "Urgência & emergência",
//                         "Exames laboratoriais",
//                         "Exames de imagem",
//                         "Funeral/cremação",
//                         "Consulta especialista",
//                         "Exames cardiológicos",
//                         "Cirurgias",
//                         "Internação",
//                         "Castração",
//                     ],
//                     price: "89",
//                     price_cents: "91*",
//                     description: "*Valor com 10% de desconto <span>Cartão Porto</span>",
//                     color: "#FFA840"    
//                 },
//                 {
//                     plan_name: 'Petlove Essencial',
//                     best_seller: true,
//                     benefits: [
//                         "Consulta generalista",
//                         "Consulta Pet Home",
//                         "Vacinas importadas",
//                         "Urgência & emergência",
//                         "Exames laboratoriais",
//                         "Exames de imagem",
//                         "Funeral/cremação",
//                         "Consulta especialista",
//                         "Exames cardiológicos",
//                         "Cirurgias",
//                         "Internação",
//                         "Castração",
//                         "Exames de alta complexidade",
//                         "Fisioterapia",
//                         "Acupuntura",
//                     ],
//                     price: "143",
//                     price_cents: "91*",
//                     description: "*Valor com 10% de desconto <span>Cartão Porto</span>",
//                     color: "#4E2096"    
//                 },
//                 {
//                     plan_name: 'Petlove Completo',
//                     best_seller: false,
//                     benefits: [
//                        "Consulta generalista",
//                        "Consulta Pet Home",
//                        "Vacinas importadas",
//                        "Urgência & emergência",
//                        "Exames laboratoriais",
//                        "Exames de imagem",
//                        "Funeral/cremação",
//                        "Consulta especialista",
//                        "Exames cardiológicos",
//                        "Cirurgias",
//                        "Internação",
//                        "Castração",
//                        "Exames de alta complexidade",
//                        "Fisioterapia",
//                        "Acupuntura",
//                        "Rede premium",
//                     ],
//                     price: "269",
//                     price_cents: "91*",
//                     description: "*Valor com 10% de desconto <span>Cartão Porto</span>",    
//                     color: "#EA534A"
//                 },
//             ],
//             discounts: [
//                     "10%",
//                     "20%",
//                     "30%",
//             ],
//             differentials: [
//                 "Microchipagem gratuita",
//                 "Localizador Pet gratuito",
//                 "Frete grátis na Petlove",
//                 "Sem fidelidade",
//                 "Possui compra de carência",
//                 "Sem limite de idade para contratação",
//                 "Desconto progressivo contratando mais de 1 pet",
//             ],
//             faqs: [
//                 {
//                     question: "Como funciona o Plano?",
//                     answer: "Petlove Saúde é um Plano de Saúde para Cães e Gatos. Você paga uma mensalidade fixa e o seu pet pode ser atendido em uma das mais de 400 Clínicas da Rede Credenciada. Solicite um orçamento, tire suas dúvidas com nossa equipe e escolha o Plano que mais se encaixa nas suas necessidades. Após a compra, você também poderá adicionar no seu Espaço do cliente: Banhos, Fisioterapia e Acupuntura, caso seu amiguinho precise",
//                 },
//                 {
//                     question: "Como funciona a Microchipagem? É seguro para meu pet?",
//                     answer: "Você não precisa levar nada no dia da Microchipagem do seu amiguinho. A Clínica irá solicitar apenas seu CPF para conferência dos dados cadastrados. Caso seu pet já seja microchipado não é necessário realizar o procedimento novamente, basta entrar em contato com a central para registro. O microchip é uma forma moderna de identificar o animal de estimação de um modo eficaz e seguro. Trata-se de um micro-circuito eletrônico, de tamanho aproximado a um grão de arroz, implantado sob a pele. Caso o animal se perca ou até mesmo seja roubado, pode ser identificado facilmente por meio de seu microchip. Funciona como um 'RG eletrônico'. Não é feito nenhum tipo de anestesia nem sedação, é como se fosse uma injeção comum e deve ser colocado na região da nuca, pois facilita a leitura.",
//                 },
//                 {
//                     question: "Tenho descontos se eu comprar para mais de 1 pet?",
//                     answer: "Com certeza! Os descontos são progressivos: para o segundo pet você ganha 10% de desconto, para o terceiro 20% de desconto e do quarto pet em diante você ganha 30% de desconto nos Planos de Saúde contratados. Os descontos são calculados automaticamente no momento da contratação.",
//                 },
//                 {
//                     question: "Acabei de contratar o Plano, quando começam a contar as carências?",
//                     answer: "Assim que seu pagamento for processado, você receberá um e-mail onde deverá clicar no link de confirmação da compra. Após esse passo, entre em contato com a Clínica de sua preferência para agendar a colocação do Microchip no seu pet. Lembre-se: suas carências começam a contar a partir da data da Microchipagem. Os procedimentos mais essenciais como consultas, vacinas, procedimentos clínicos e internações têm apenas 45 dias de carência. Os exames e consultas com especialistas 60 dias, já as cirurgias e anestesia possuem 120 dias, por serem procedimentos mais delicados. Após a contratação, você pode antecipar algumas carências através do Espaço do cliente e utilizar o Plano imediatamente.",
//                 },
//                 {
//                     question: "Como funciona a copartipação nos Planos?",
//                     answer: "A coparticipação é uma pequena taxa que você paga na utilização de alguns procedimentos. Na maioria das vezes, este valor é pago diretamente para a Clínica, e apenas em anestesias e exames que os valores são pagos para Petlove. Os valores são tabelados, não sofrendo alterações. Solicite a tabela para nossa equipe.",
//                 },
//                 {
//                     question: "Onde posso ver o que já utilizei pelo Plano e o que ainda tenho direito?",
//                     answer: "É muito fácil. No Espaço do cliente, você pode ver o prontuário online do Plano do seu pet, assim como os procedimentos que ainda podem ser realizados. Faça o login com e-mail e senha para acessar.",
//                 },
//                 {
//                     question: "Precisa ser eu para levar meu pet para consultar ou pode ser outra pessoa?",
//                     answer: "No momento do atendimento seu pet será identificado pelo número do Microchip, portanto pode ser outra pessoa para levá-lo, como por exemplo um familiar.",
//                 },
//             ],
//         },
//         {    
//             title: "Plamev",
//             logo_path: "src/images/desktop/1400px/plamev.webp",
//             plans: [
//                 {
//                     plan_name: 'Slim',
//                     best_seller: false,
//                     benefits: [
//                         "Clínico geral",
//                         "Emergencial",
//                         "Exames laboratoriais básicos",
//                         "Vacina contra raiva",
//                     ],
//                     price: "39",
//                     price_cents: "99",
//                     description: "",
//                     color: "#009ca4"    
//                 },
//                 {
//                     plan_name: 'Advance',
//                     best_seller: true,
//                     benefits: [
//                         "Clínico geral",
//                         "Emergencial",
//                         "Cirurgias simples",
//                         "Anestesia",
//                         "Procedimentos ambulatoriais",
//                         "Exames por imagens",
//                         "Exames laboratoriais (básicos / rotina / check-up)",
//                         "Vacinas",
//                     ],
//                     price: "99",
//                     price_cents: "99",
//                     description: "",
//                     color: "#FFA840"    
//                 },
//                 {
//                     plan_name: 'Platinum',
//                     best_seller: false,
//                     benefits: [
//                         "Clínico geral",
//                         "Emergencial",
//                         "Consulta especialista",
//                         "Cirurgias",
//                         "Anestesia",
//                         "Procedimentos ambulatoriais",
//                         "Exames por imagens",
//                         "Exames laboratoriais (básicos / rotina / check-up / sorológicos)",
//                         "Vacinas",
//                         "Fisioterapia",
//                         "Acupuntura",
//                         "Ozonioterapia",
//                         "Auxilio Funeral (Cremação)",
//                     ],
//                     price: "169",
//                     price_cents: "99",
//                     description: "",    
//                     color: "#0077b2"
//                 },
//                 {
//                     plan_name: 'Diamond',
//                     best_seller: false,
//                     benefits: [
//                         "Clínico geral",
//                         "Emergencial",
//                         "Consulta especialista",
//                         "Cirurgias",
//                         "Anestesia",
//                         "Procedimentos ambulatoriais",
//                         "Exames por imagens completo",
//                         "Exames laboratoriais completo",
//                         "Vacinas",
//                         "Fisioterapia",
//                         "Acupuntura",
//                         "Ozonioterapia",
//                         "Auxilio Funeral (Cremação)",
//                         "Exames do olho",
//                         "Reprodução assistida (inseminação artificial)",
//                         "PET HELP (assessoria 24h por telefone)",
//                     ],
//                     price: "299",
//                     price_cents: "91",
//                     description: "",    
//                     color: "#79cc43"
//                 },
//             ],
//             discounts: [
//                 "5%",
//                 "10%",
//                 "20%",
//             ],
//             differentials: [
//                 "Sem obrigatoriedade de microchipagem",
//                 "Reembolso fora da rede credenciada",
//                 "Atendimento internacional por reembolso",
//                 "Sem coparticipação",
//                 "Possui compra de carência",
//                 "Opção de pagamento no boleto",
//                 "Compra de banho/tosa com desconto",
//                 "Desconto progressivo contratando mais de 1 pet",
//             ],
//             faqs: [
//                 {
//                     question: "Como funciona o plano de saúde para pets?",
//                     answer: "É igual o plano de humano: você paga uma mensalidade e tem acesso à cobertura dos procedimentos do plano contratado e leva seu pet à um parceiro conveniado para atendimento. Caso não tenha um conveniado em sua região, você pode levar ao veterinário/clínica/hospital da sua escolha e solicitar o reembolso dos procedimentos realizados, de acordo com a tabela de reembolso do plano contratado.",
//                 },
//                 {
//                     question: "Como é a forma de pagamento?",
//                     answer: "Você pode contratar pelo cartão de crédito e a cada mês será cobrado o valor do plano na sua fatura, ou pela opção de boleto, a ser pago manualmente. O valor do plano no boleto tem um acréscimo de R$ 20,00.",
//                 },
//                 {
//                     question: "O plano é cooparticipativo?",
//                     answer: "Não",
//                 },
//                 {
//                     question: "Como solicito o reembolso?",
//                     answer: "Pelo aplicativo Plamev Appet você envia as fotos das notas fiscais de todos os procedimentos realizados e depositamos o dinheiro de volta (de acordo com a tabela de reembolso) em até 30 dias na sua conta bancária.",
//                 },
//                 {
//                     question: "Tenho desconto se eu contratar o plano para mais de um pet?",
//                     answer: "Sim! O valor do primeiro pet é cheio; o segundo pet tem 5% de desconto; o terceiro pet tem 10% de desconto; o quarto pet tem 15% de desconto; do quinto pet em diante o desconto é de 20%. O desconto não é aplicado no valor total, e sim sobre a mensalidade de cada pet.",
//                 },
//             ],
//         },
//         // {    
//         //     title: "",
//         //     logo_path: "src/images/logos/.webp",
//         //     plans: [
//         //         {
//         //             plan_name: '',
//         //             best_seller: false,
//         //             benefits: [
//         //                 "",
//         //                 "",
//         //                 "",
//         //                 "",
//         //             ],
//         //             price: "",
//         //             price_cents: "",
//         //             description: "",
//         //             color: "#"    
//         //         },
//         //         {
//         //             plan_name: '',
//         //             best_seller: false,
//         //             benefits: [
//         //                 "",
//         //                 "",
//         //                 "",
//         //                 "",
//         //             ],
//         //             price: "",
//         //             price_cents: "",
//         //             description: "",
//         //             color: "#"    
//         //         },
//         //         {
//         //             plan_name: '',
//         //             best_seller: false,
//         //             benefits: [
//         //                 "",
//         //                 "",
//         //                 "",
//         //                 "",
//         //             ],
//         //             price: "",
//         //             price_cents: "",
//         //             description: "",
//         //             color: "#"    
//         //         },
//         //         {
//         //             plan_name: '',
//         //             best_seller: false,
//         //             benefits: [
//         //                 "",
//         //                 "",
//         //                 "",
//         //                 "",
//         //             ],
//         //             price: "",
//         //             price_cents: "",
//         //             description: "",
//         //             color: "#"    
//         //         },
//         //     ],
//         //     discounts: [
//         //         "%",
//         //         "%",
//         //         "%",
//         //     ],
//         //     differentials: [
//         //         "",
//         //         "",
//         //         "",
//         //         "",
//         //         "",
//         //         "",
//         //         "",
//         //         "",
//         //     ],
//         //     faqs: [
//         //         {
//         //             question: "",
//         //             answer: "",
//         //         },
//         //         {
//         //             question: "",
//         //             answer: "",
//         //         },
//         //     ],
//         // },
//     ];

//     // Loop through contentBlocks and add them to the HTML
//     let contentBlockHTML = '';
//     let workingPlans = [];
//     let differentialsContent = '';
    
//     let tableNavContent = '';
//     let tableContent = '';
//     // let plansContent = '';
//     let tableContentHTML = document.getElementById('column-table'); 
    
//     let faqNavContent = '';
//     let faqContent = '';
//     let faqCards = document.getElementById('faq-cards');

//     for (let i = 0; i < contentBlocks.length; i++) {
//         let block = contentBlocks[i];
//         workingPlans.push(block.title);

//         faqNavContent += `
//             <div class="faq-tab-item ${i === 0 ? "selected" : ""}">
//                 <div class="btn">
//                     <button name="${block.title.replace(/\s/g, '')}" onclick="openFaq('_${block.title.replace(/\s/g, '')}')"><h2>${block.title}</h2></button>
//                 </div>
//             </div>
//         `;

//         let displayStyle = i === 0 ? 'block' : 'none';

//         faqContent += `
//             <div class="column _faq" id="_${block.title.replace(/\s/g, '')}" style="display: ${displayStyle};">
//         `;

//         for (let k = 0; k < block.faqs.length; k++) {
//             let faq = block.faqs[k];

//             faqContent += `
//                 <div class="item-qa ${k === 0 ? "open" : ""}">
//                     <div class="text question">
//                         <span class="icon-q">${k === 0 ? "-" : "+"}</span>
//                         <p>${faq.question}</p>
//                     </div>

//                     <div class="text answer">
//                         <div class="paragraph">
//                             <p>${faq.answer}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         };

//         faqContent += `
//             </div>
//         `;

//         let displayStyleTable = i === 0 ? 'flex' : 'none';

//         tableNavContent += `
//             <div class="tab-item ${i === 0 ? "open" : ""}">
//                 <button name="${block.title.replace(/\s/g, '')}" class="tab-btn tab-0${[i]}" onclick="openPlan('${block.title.replace(/\s/g, '')}')">
//                     <h6>${block.title}</h6>
//                 </button>
//             </div>
//         `;

//         tableContent += `
//             <div class="column plan" id="${block.title.replace(/\s/g, '')}" style="display: ${displayStyleTable};">
//                 <div class="row" id="row-table-plans">
//         `; 

//         for (let z = 0; z < block.plans.length; z++) {
//             let plan = block.plans[z];
                
//             tableContent += `
//                 <div class="column">
//             `;

//             if (plan.best_seller == true) {
//                 tableContent += `
//                     <div class="card best-seller">
//                         <div class="circle">
//                             <div class="text">
//                                 <small>Mais vendido</small>
//                             </div>
//                         </div>
//                 `;
//             } else {
//                 tableContent += ` 
//                     <div class="card">
//                 `;
//             }

//             tableContent += `
//                 <div class="price" style="background-color: ${plan.color};">
//                     <div class="text">
//                         <div class="column">
//                             <p>A partir de</p>

//                             <div class="row">
//                                 <div class="text-upper">
//                                     <small>R$</small>
//                                 </div>

//                                 <div class="text-center">
//                                     <h1>${plan.price},</h1>
//                                 </div>

//                                 <div class="text-upper">
//                                     <div class="column">
//                                         <h1>${plan.price_cents}</h1>
//                                         <small>mensais</small>
//                                     </div>
//                                 </div>
//                             </div>

//                             <small>${plan.description}</small>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="name">
//                     <div class="text">
//                         <div class="title">
//                             <h6>${plan.plan_name}</h6>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="list">
//                     <div class="text benefits-plan">
//                         <ul>
//             `;

//             for (let j = 0; j < plan.benefits.length; j++) {
//                 let benefit = plan.benefits[j];
//                 tableContent += `<li>${benefit}</li>`;
//             }
                            
//             tableContent += `
//                                 </ul>
//                             </div>

//                             <div class="btn">
//                                 <button name="Ver mais" class="see-more">Ver mais</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="btn cta">
//                         <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511951607141&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20-%20${plan.plan_name}">Tenho interesse!</a>
//                     </div>
//                 </div>
//             `;
//         };

//         tableContent += `</div>
//         `; 

//         tableContent += `
//                 <div class="column discount">
//                     <div class="text">
//                         <div class="title">
//                             <h2>Descontos progressivos</h2>
//                         </div>
//                     </div>

//                     <div class="row">
//                         <div class="item small">
//                             <div class="circle discount">
//                                 <div class="text">
//                                     <p>${block.discounts[0]} no segundo pet</p>
//                                 </div>
//                             </div>

//                             <div class="img">
//                                 <picture>
//                                     <source media="(min-width: 1400px)" srcset="src/images/desktop/1400px/two-pets.webp">
//                                     <source media="(min-width: 1200px)" srcset="src/images/desktop/1200px/two-pets.webp">
//                                     <source media="(min-width: 992px)" srcset="src/images/desktop/992px/two-pets.webp">
//                                     <source media="(min-width: 768px)" srcset="src/images/tablet/768px/two-pets.webp">
//                                     <source media="(min-width: 576px)" srcset="src/images/tablet/576px/two-pets.webp">
//                                     <source media="(min-width: 480px)" srcset="src/images/tablet/480px/two-pets.webp">
//                                     <source media="(min-width: 414px)" srcset="src/images/mobile/414px/two-pets.webp">
//                                     <source media="(min-width: 376px)" srcset="src/images/mobile/376px/two-pets.webp">
//                                     <source media="(min-width: 320px)" srcset="src/images/mobile/320px/two-pets.webp">
//                                     <img loading="lazy" src="src/images/desktop/1400px/two-pets.webp" alt="Dois cachorros felizes">
//                                 </picture>
//                             </div>
//                         </div>

//                         <div class="item medium">
//                             <div class="circle discount">
//                                 <div class="text">
//                                     <p>${block.discounts[1]} no terceiro pet</p>
//                                 </div>
//                             </div>

//                             <div class="img">
//                                 <picture>
//                                     <source media="(min-width: 1400px)" srcset="src/images/desktop/1400px/three-pets.webp">
//                                     <source media="(min-width: 1200px)" srcset="src/images/desktop/1200px/three-pets.webp">
//                                     <source media="(min-width: 992px)" srcset="src/images/desktop/992px/three-pets.webp">
//                                     <source media="(min-width: 768px)" srcset="src/images/tablet/768px/three-pets.webp">
//                                     <source media="(min-width: 576px)" srcset="src/images/tablet/576px/three-pets.webp">
//                                     <source media="(min-width: 480px)" srcset="src/images/tablet/480px/three-pets.webp">
//                                     <source media="(min-width: 414px)" srcset="src/images/mobile/414px/three-pets.webp">
//                                     <source media="(min-width: 376px)" srcset="src/images/mobile/376px/three-pets.webp">
//                                     <source media="(min-width: 320px)" srcset="src/images/mobile/320px/three-pets.webp">
//                                     <img loading="lazy" src="src/images/desktop/1400px/three-pets.webp" alt="Três gatinhos fofinhos">
//                                 </picture>
//                             </div>
//                         </div>

//                         <div class="item large">
//                             <div class="circle discount">
//                                 <div class="text">
//                                     <p>${block.discounts[2]} no quarto pet ou mais</p>
//                                 </div>
//                             </div>

//                             <div class="img">
//                             <picture>
//                                 <source media="(min-width: 1400px)" srcset="src/images/desktop/1400px/five-pets.webp">
//                                 <source media="(min-width: 1200px)" srcset="src/images/desktop/1200px/five-pets.webp">
//                                 <source media="(min-width: 992px)" srcset="src/images/desktop/992px/five-pets.webp">
//                                 <source media="(min-width: 768px)" srcset="src/images/tablet/768px/five-pets.webp">
//                                 <source media="(min-width: 576px)" srcset="src/images/tablet/576px/five-pets.webp">
//                                 <source media="(min-width: 480px)" srcset="src/images/tablet/480px/five-pets.webp">
//                                 <source media="(min-width: 414px)" srcset="src/images/mobile/414px/five-pets.webp">
//                                 <source media="(min-width: 376px)" srcset="src/images/mobile/376px/five-pets.webp">
//                                 <source media="(min-width: 320px)" srcset="src/images/mobile/320px/five-pets.webp">
//                                 <img loading="lazy" src="src/images/desktop/1400px/five-pets.webp" alt="Cinco pets">
//                             </picture>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;

            
//         differentialsContent += `
//             <div class="card">
//                 <div class="column">
//                     <div class="img">
//                         <img loading="lazy" src="${block.logo_path}" alt="${block.title}">
//                     </div>

//                     <div class="list">
//         `;

//         for (let o = 0; o < block.differentials.length; o++) {
//             let differential = block.differentials[o];
//             differentialsContent += `
//                 <div class="text">
//                     <p>● ${differential}</p>
//                 </div>    
//             `;
//         };

//         differentialsContent += `
//                     </div> 
//                 </div> 
//             </div> 
//         `;

//         if (block.logo_path !== '') {
//             contentBlockHTML += `
//             <div class="img">
//                 <img loading="lazy" src="${block.logo_path}" alt="${block.title} logo">
//             </div>
//             `;
//         }
//     };

//     // Join the workingPlans array into a string with "and" between the penultimate and last item
//     let workingPlansString = '';

//     if (workingPlans.length > 1) {
//         workingPlansString = workingPlans.slice(0, -1).join(', ') + ' e ' + workingPlans.slice(-1);

//     } else {
//         workingPlansString = workingPlans[0];

//     }

//     workingPlansString += '.';

//     // Add the content block HTML to the page
//     document.getElementById('dinamyc-block-logos').innerHTML = contentBlockHTML;
//     document.getElementById('form-plans').innerHTML = workingPlansString;
//     document.getElementById('differentials-cards').innerHTML = differentialsContent;
    
//     document.getElementById('table-nav').innerHTML = tableNavContent;
//     tableContentHTML.appendChild(document.createRange().createContextualFragment(tableContent));
//     // document.getElementsByClassName('row-table-plans').innerHTML = plansContent;

//     document.getElementById('faq-nav').innerHTML = faqNavContent;
//     faqCards.appendChild(document.createRange().createContextualFragment(faqContent));



// });