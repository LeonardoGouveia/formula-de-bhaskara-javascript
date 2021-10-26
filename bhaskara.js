var a; a = parseInt(prompt("Insira o valor do A: ")); // pede ao usuário o valor da determinante A
var b; b = parseInt(prompt("Insira o valor de B: ")); // pede ao usuário o valor da determinante B
var c; c = parseInt(prompt("Insira o valor de C: ")); // pede ao usuário o valor da determinante C
var bAoQuadradoMenos4ac; bAoQuadradoMenos4ac = (b*b) - 4 * a * c; // RESULTADO DE DELTA
console.log("Valor do DELTA: ", bAoQuadradoMenos4ac); // Informa o valor de DELTA
var resultadoRaiz; resultadoRaiz = Math.sqrt(bAoQuadradoMenos4ac); // RAIZ QUADRADA DE DELTA
var x1; var x1 = ((-1*b) + resultadoRaiz) / (2*a); // X' = -B + RAIZ DE DELTA dividido  por 2*A
var x2; var x2 = ((-1*b) - resultadoRaiz) / (2*a); // X" = -B - RAIZ DE DELTA dividido  por 2*A
console.log("x1: ", x1); // Resultado X'
console.log("x2: ", x2); // Resultado X"