let vitorias = 900
let derrotas = 710

function CalcularPartidas(num1, num2){
    return (num1 - num2)
}

let ranq = CalcularPartidas(vitorias, derrotas)
let saldo = ranq

if (ranq < 10) {
    ranq = "Ferro";
} else if (ranq > 10 && ranq <= 20) {
    ranq = "Bronze";
} else if (ranq > 20 && ranq <= 50) {
    ranq = "Prata";
} else if (ranq > 50 && ranq <= 80) {
    ranq = "Ouro";
} else if (ranq > 80 && ranq <= 90) {
    ranq = "Diamante";
} else if (ranq > 90 && ranq <= 100) {
    ranq = "Lendário";
} else if (ranq > 100) {
    ranq = "Imortal";
} else {
    console.log("Ranque Desconhecido");
}

console.log("O herói tem o saldo de " + saldo + ". Seu nível é: " + ranq);

