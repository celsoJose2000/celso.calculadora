const entrada1 = window.prompt("informe o primiero numero");
const entrada2 = window.prompt("informe o segundo numero");


const x = parseFloat(entrada1);
const y = parseFloat(entrada2);


const soma = x + y 
const subtraçao = x - y 
const multiplicaçao = x * y 
const divisao = x / y 

window.alert(
 "Resultados:\n " +
 "\nSome: " + soma +
 "\nSubtraçao " + subtraçao +
 "\nMultiplicaçao " + multiplicaçao +
 "\nDivisao " + divisao 
)
 