//Escreva um programa que inverta os caracteres de um string.
//
//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

let saudação = "Olá, tudo bem";
let saudação_Investida = "";

//convertendo a string usando array de caracteres

Array.from(saudação).forEach(function(caractere){
  //concatenando o caractere atual na inversao 
  saudação_Investida = caractere + saudação_Investida;
});
console.log(saudação_Investida);