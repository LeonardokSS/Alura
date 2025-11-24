let numeroSecreto = 2


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
        document.getElementById('reiniciar').removeAttribute('disabled')
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

function limparCampo(){
    campo = document.querySelector('input').value;
    campo = '';
}
//querySelector seleciona um elemento pelo seu id, nome classe
// id = ('#id') , nome = ('nome'), classe = ('.classe')


function mostrarMsg(){
    exibirTextoNaTela('h1','Jogo reiniciado, Adivinhe novamente');
    exibirTextoNaTela('p1','Numero de 1 a 10');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mostrarMsg();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disable',true)
}

