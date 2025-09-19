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

setInterval(function() {
    relogio.innerText = retornaDataHora();
}, 1000);