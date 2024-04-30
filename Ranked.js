const readline = require('readline');
const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ranks = {
    Ferro: 0,
    Bronze: 11,
    Prata: 21,
    Ouro: 51,
    Diamante: 81,
    Lendario: 91,
    Imortal: 101
}


function calcularRank(vitorias, derrotas) {
    let totalPartidas = vitorias - derrotas;
    let rankfinal = "";
    if (totalPartidas < 0) {
        rankfinal = "Ferro";
    } else {
        for (let rank in ranks) {
            if (totalPartidas >= ranks[rank]) {
                rankfinal = rank;
            } else {
                break;
            }
        }
    }
    return rankfinal;
}

prompt.question("Informe o número de vitórias: ", function (vitorias) {
    prompt.question("Informe o número de derrotas: ", function (derrotas) {
        console.log("O Herói tem saldo de vitórias de " + (vitorias-derrotas) + ", e está no nível: " + calcularRank(vitorias, derrotas) + ".");
        prompt.close();
    });
}
);
