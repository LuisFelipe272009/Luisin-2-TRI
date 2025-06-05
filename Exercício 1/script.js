let num1;
let num2;
let resultado;
let parouimpar;
num1 = Number(window.prompt("Digite aqui seu primeiro número"));
num2 = Number(window.prompt("Digite o segundo número"));

resultado = num1 + num2;

parouimpar = resultado % 2;

if( parouimpar ==0) {
    alert("O número " + resultado + " é par");
} else {
    alert("o numero " + resultado + "é impar");
}