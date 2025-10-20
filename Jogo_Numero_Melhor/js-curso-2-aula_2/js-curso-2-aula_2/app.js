let numeroSecreto = 7


let tentativa = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {

    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'tentativas':'tentativa';
        exibirTextoNaTela('h1','Você acertou o numero!');
        exibirTextoNaTela('p',`Acertou com ${tentativa} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disable')
    }
   
    else{
        exibirTextoNaTela('h1','Errou, tente novamente!');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10');
        tentativa++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}


//querySelector seleciona um elemento pelo seu id, nome classe
// id = ('#id') , nome = ('nome'), classe = ('.classe')

function resetar(){
    let campo = document.querySelector('input');
    campo = '';

}







