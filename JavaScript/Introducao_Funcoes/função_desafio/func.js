//Funcao de ola mundo
function olaMundo(){
    console.log('Olá mundo!')
}


// Funcao de mostrar nome com parametro
function mostrarNome(nome){
    console.log(`Olá ${nome}`)
}
olaMundo()
mostrarNome("leo")


// Funcao de mostrar o dobro do numero com o parametro 
function dobrar(numero){
    console.log(numero*2)
}

dobrar(4)

//Funcao de mostra a media de numeros
function media(numero1,numero2,numero3){
    let media = numero1+numero2+numero3
    let mediadi = media/3
    console.log(mediadi)    
}

media(2,4,2)    


// Funcao para mostrar qual numero e maior
function maior(numero1,numero2){
    if(numero1>numero2){
        console.log("Numero 1 é maior")
    }
    else if(numero1 == numero2){
        console.log("Os dois são iguais!")
    }
else{
    console.log("Numero 2 é maior")
}
}


maior(1,2)



function retornarDobro(numero){
    numeroDobro = numero * numero
    console.log(`O dobro do seu numero é : ${numeroDobro}`)
}

retornarDobro(3)