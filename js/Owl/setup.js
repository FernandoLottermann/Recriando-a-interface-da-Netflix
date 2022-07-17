$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

/*Funções*/

function cliqueAssistir() {
    window.open("https://www.youtube.com/c/FernandoLottermann");
}

function butaoSemFuncao() {
    alert("Ops, este botão ainda não tem uma função 😅");
}