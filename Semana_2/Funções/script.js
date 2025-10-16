// Para evitarmos o uso repetitivo do mesmo codigo podemos utilizar as funcoes


//let titulo = document.querySelector('h1');
 //titulo.innerHtml = 'Texto aleatório';


//let mudarTexto2 = document para evitar essa repeticao novamente podemos


//function mudarTexto (tag, conteudo){
// let campo = document.querySelector(tag);
 ///campo.innerHtml(conteudo);
//}

//mudarTexto('h1','Texto aleatorio');

let chamarFunc = gerarNumero()

// funcao sem parametros que retorna o valor aleatorio de 1 a 100
function gerarNumero() {
 return parseInt(Math.random() * 100 + 1);
}

console.log(chamarFunc)