// como eu capturo a hora, minutos e segundos 
// do computador do usuário?

const dataEhora = new Date();

console.log("Hora", dataEhora.getHours());
console.log("Minutos", dataEhora.getMinutes());
console.log("Segundos", dataEhora.getSeconds());

// função de normalização
// Crie uma função que recebe um número
// se este número for menor que 10, retorna o numero com 0 antes
// ex: 1 -> 01, 7 -> 07, 10 -> 10
function normalizaNumeros(numero) {
    return (numero < 10) ? "0" + numero : numero;
}