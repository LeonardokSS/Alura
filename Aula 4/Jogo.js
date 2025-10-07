alert('Boas vindas ao jogo do número secreto');
let numeroMultiplicador = parseInt(Math.random() * 10 + 1 )
console.log(numeroMultiplicador)
let numeroSecreto = parseInt(Math.random() * 10 + 1)

let numeroFinal = numeroMultiplicador * numeroSecreto

console.log(numeroFinal)

let chute;
let tentativas = 1;


// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 0 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

