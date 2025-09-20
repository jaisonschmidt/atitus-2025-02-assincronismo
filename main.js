let interval;
const relogio = document.getElementById("relogio");

function normalizaNumeros(numero) {
    return (numero < 10) ? "0" + numero : numero;
}

function retornaDataHora() {
    const dataEhora = new Date();

    const hora = normalizaNumeros(dataEhora.getHours());
    const minutos = normalizaNumeros(dataEhora.getMinutes());
    const segundos = normalizaNumeros(dataEhora.getSeconds());

    return `${hora}:${minutos}:${segundos}`;
}

function play() {
    interval = setInterval(function() {
        relogio.innerText = retornaDataHora();
    }, 1000);
}

// Quando bota o mouse em cima do relógio, ele para
// Quando tirar o mouse de cima, ele volta a funcionar
// clearInterval