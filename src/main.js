document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button');
    const questions = document.querySelectorAll('[data-faq-questions]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if ( posicaoAtual < alturaHero) {
            ocultarElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // Section atrações
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            removeButaoAtivo();
            botao.target.classList.add("shows__tabs__button--is-active");

        })
    }
    // Section Faq
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultarElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');   
}

function abreOuFechaResposta(elemento) {
   const classe ='faq__questions__item--is-open';
   const elementoPai = elemento.target.parentNode;

   elementoPai.classList.toggle(classe);
}
function removeButaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id');
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}
