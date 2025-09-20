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

function stop() {
    clearInterval(interval);
}

play();

// como detecto quanto boto o mouse sobre um elemento?
relogio.addEventListener("mouseover", stop);

// como detecto quando movo o mouse para fora de um elemento?
relogio.addEventListener("mouseleave", play);