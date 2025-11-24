// Calcular Imc
function Imc(peso,altura){
    let imc = peso/altura ** 2
    console.log(`Seu imc é ${imc}kg/m²`)
}


Imc(70,1.92)
// Calucular fatorial
function Calc(numero){
    if(numero < 0){
        console.log("Fatorial não é definido para numeros negativos!")
    }else{
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O resultado do seu numero é: ${fatorial}`);
    }
}



Calc(-1)


// Dolar para real
function dollar(valor){
    let preco = valor * 4.80
    console.log(`O valor em reais é: ${preco}R$`)
}

dollar(10)


// Real para dolar
function reais(valor){
    let preco = valor / 4.80
    let mensagem = preco > 1? "dolares":"dolar"
    console.log(`O valor em dolares é: ${preco} ${mensagem}`)
}

reais(1)


// Área e perimetro

function areaP(largura, altura){
    let area = largura * altura
    console.log(`A área da sua sala é ${area}`)
    let perimetro = largura * 2 + altura * 2
    console.log(`O perimetro da sua sala é ${perimetro}`)
}

areaP(10,9)

// Sala circular
function areaC(raio){
    let area = 3.14 * raio **2
    console.log(area)
}

areaC(10)


let numeros = []

function tabela(numero){
    if(numero == 0){
        console.log("Não existe tabuada para o 0!")
    }
    for(let i = 1; 10 >= i; i++){
        let NumeroMultiplicado = numero * i
        numeros.push(NumeroMultiplicado)
    }
    let resultado = numeros.join(', ')
    console.log(resultado)
}

tabela(3)+