const num = Number(prompt("Digite um número"))

// Utilizando ifs aninhados:

if(num % 2 === 0){
    if(num % 3 === 0){
        console.log("Sim, é divisível por 2 e 3")
    }else{
        console.log("Não é divisível!")
    }
}else{
    console.log("Não é divisível")
}

// Utilizando um operador lógico para unir duas operações relacionais

if(num % 2 === 0 && num % 3 === 0){
    console.log("Sim, é divisível por 2 e 3");
}else{
    console.log("Não, não é divisível!");
}



