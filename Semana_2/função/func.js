function olaMundo(){
    console.log('Olá mundo!')
}



function mostrarNome(nome){
    console.log(`Olá ${nome}`)
}
olaMundo()
mostrarNome("leo")

function dobrar(numero){
    console.log(numero*2)
}

dobrar(4)


function media(numero1,numero2,numero3){
    let media = numero1+numero2+numero3
    let mediadi = media/3
    console.log(mediadi)    
}

media(2,4,2)    



function maior(numero1,numero2){
    if(numero1>numero2){
        console.log("numero1 é maior")
    }
    if(numero1 == numero2){
        console.log("Os dois são iguais!")
    }
else{
    console.log("Numero2 é maior")
}
}


maior(2,2)