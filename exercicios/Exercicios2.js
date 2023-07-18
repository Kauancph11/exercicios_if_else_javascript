let prompt = require("prompt-sync")()



let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura)
let faixaPeso


if (imc < 18.5) {

    faixaPeso = "IMC menor que 18.5: Abaixo do peso" 

    console.log("Abaixo do peso")
 }  else if (imc >= 18.5 && imc <= 24.9) 
  {
    faixaPeso = "IMC de 18.5 a 24.9: Peso normal"

    console.log("Peso normal")
   
  } 
  
  else if (imc >= 25.0 && imc <= 29.9)
 {
    faixaPeso = "IMC de 25.0 a 29.9: Sobrepeso"

    console.log("Sobrepeso")
    
  } 

  else if (imc >= 30.0 && imc <= 34.9)
  {
    faixaPeso = "IMC de 30.0 a 34.9: Obesidade grau 1"

    console.log("Obesidade grau 1")
  
  } else if (imc >= 35.0 && imc <= 39.9)
   {
    faixaPeso = "IMC de 35.0 a 39.9: Obesidade grau 2"

    console.log("Obesidade grau 2")
    
  } else if (imc >= 40.0) {
      faixaPeso = "IMC maior ou igual a 40.0: Obesidade grau 3"

    console.log("Obesidade grau 3")
  }
  
  else {

   
    
  }
  
  console.log("Seu IMC é", imc.toFixed(2));
  console.log("Faixa de peso:", faixaPeso);