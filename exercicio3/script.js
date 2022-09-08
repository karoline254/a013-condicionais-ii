// //código a ser reescrito

// // Código 01:

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// Código usando If ternério 01
const nome = prompt("Qual o seu nome?")
nome === "José" ? console.log("Oi, Zé") : console.log("Olá, "+nome);

// // Código 02:

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

// Código usando If ternério 02:

const idade = Number(prompt("Qual a sua idade?"))
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista");
