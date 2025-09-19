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
    // neste momento, temos a hora no formato HH:MM:SS
    console.log(retornaDataHora());
    // em vez de sexibir no console, exibir em um elemento HTML
}, 1000);