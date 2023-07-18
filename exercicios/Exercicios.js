let prompt = require("prompt-sync")()




// let numero = parseInt(prompt("Digite um numero: "))
// let resultado = parseInt(numero % 2)



// if (resultado == 0) {
//     console.log("Esse numero e par")
    
// }else{
//     console.log("Esse numero e impar")
// }

let nome = prompt("Digite seu nome: ")
let cargo = prompt("Digite seu cargo: ")
let salario = parseFloat (prompt("Digite seu salario: "))


if (salario < 1000) {
   let acrescimo = salario * 0.1
    console.log(nome)
    console.log(cargo)
    console.log("Seu salario e: " + (salario + acrescimo))
}else{
    console.log(nome)
    console.log(cargo)
    console.log("Seu salario e: " + salario)
}

// let salario = parseFloat(prompt("Digite seu salario: "))

// if (salario < 500) {
//     ajuste = parseFloat(salario * 0.3)
//     console.log("Seu salario e: " + (salario + ajuste))
// }else{
//     console.log("Seu salario e: " + salario )
// }

// let numero = parseInt(prompt("Digite um numero: "))

// if (numero >= 0) {
//     console.log("Esse numero e positivo")
// }else{
//     console.log("Esse numero e negativo")
// }


// let numero = parseInt(prompt("Digite o primeiro numero: "))
// let numero2 = parseInt(prompt("Digite o segundo numero: "))

// if (numero > numero2) {
//     console.log("Esse numero e maior: " + numero)
// }else{
//     console.log("Esse numero e maior: " + numero2)
// }

// let nota1 = parseFloat(prompt("Digite a primeira nota: "))
// let nota2 = parseFloat(prompt("Digite a segunda nota: "))
// let nota3 = parseFloat(prompt("Digite a terceira nota: "))
// let nota4 = parseFloat(prompt("Digite a quarta nota: "))

// media = (nota1 + nota2 + nota3 + nota4) / 4

// if (media >= 7.0) {
//     console.log("Aprovado sua nota e: " + media)
// }else if(media < 7.0 && media >= 5.0){
//     console.log("Recuperacao sua nota e: " + media)
// }else{
//     console.log("Reprovado sua nota e: " + media)
// }


// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


// let nomeUsuario = prompt("Digite o nome de usuário:");
// let senha = prompt("Digite a senha:");

// if (nomeUsuario === "admin" && senha === "senha123") {
  
 
// console.log("Login bem-sucedido!");
// } 

// else {
  
 
// console.log("Nome de usuário ou senha incorretos. Faça novamente.");
// }

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

// let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

// let nomeDia;

// switch (numeroDia) {
//   case 1:
//     nomeDia = 
   
// "Segunda-feira";
    
   
// break;
//   case 2:
//     nomeDia = 
   
// "Terça-feira";
//     break;
  
 
// case 3:
//     nomeDia = 
   
// "Quarta-feira";
//     break;
  
 
// case 4:
//     nomeDia = 
   
// "Quinta-feira";
//     break;
  
 
// case 5:
//     nomeDia = 
   
// "Sexta-feira";
//     break;
  
 
// case 6:
//     nomeDia = 
   
// "Sábado";
//     break;
  
 
// case 7:
//     nomeDia = 
   
// "Domingo";
    
   
// break;
  
 
// default:
//     nomeDia = 
//     nomeDia =

   
// "Número inválido. Digite um número de 1 a 7.";
// }

// console.log("O dia correspondente ao número", numeroDia, "é", nomeDia);

// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// // não.

// let num1 = parseFloat(prompt("Digite o primeiro número:"));
// let num2 = parseFloat(prompt("Digite o segundo número:"));
// let num3 = parseFloat(prompt("Digite o terceiro número:"));

// if (num1 < num2 && num2 < num3) {
//   console.log("Os números estão em ordem crescente.");
// } else {
//   console.log("Os números não estão em ordem crescente.");
// }

// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


// let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
// let anoAtual = new Date().getFullYear();
// let idade = anoAtual - anoNascimento;

// if (idade >= 18) {
  
 
// console.log("Você é maior de idade.");
// } else {
  
 
// console.log("Você não é maior de idade.");

// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// let valorCompra = parseFloat(prompt("Digite o valor total da compra:"));

// let valorFinal;

// if (valorCompra <= 100) {
//   valorFinal = valorCompra
//   console.log("Valor total: sem desconto")
// } else if (valorCompra  <=200   ) {
//     valorFinal = valorCompra + (valorCompra*10)/100
//     console.log("Valor total: com desconto 10%")
// } else if (valorCompra >= 200) {
//     valorFinal = valorCompra + (valorCompra*20)/100
//     console.log("Valor total: com desconto 20%")
    
// }else{

//     console.log(">")
// }

// console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));

// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3




