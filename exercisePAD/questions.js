//1 –-> Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.

function primeiraQuestao(args){
    return `Olá ${args}!`;
}
// Já vi olás mais animados :(
//2 –-> Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação ou divisão desses valores, dependendo da função Callabck.
function segundaQuestaoAdicao(valorUm, valorDois) {
    return valorUm + valorDois;
}

function subtracao(valorUm, valorDois) {
    return valorUm - valorDois;
}

function multiplicacao(valorUm, valorDois) {
    return valorUm * valorDois;
}

function divisao(valorUm, valorDois) {
    return valorUm / valorDois;
}

function calculadora(valorUm, valorDois, callback) {
	console.log(callback(valorUm, valorDois));
}
//3 –-> Crie uma função que recebe um parâmetro e uma callback que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.
function terceiraquestao(numX, callback){
    return function verificador(numY){
        callback(numX,numY);
    };
}
var valores = terceiraquestao(28, function(numX, numY){
    numX % numY == 0 ? true : false;
    console.log(numX);
    console.log(numY);
});

//4 –-> Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
function mesesdoano(mesDado){
    switch(mesDado){
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5:
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
        default:
            return 'Coloque um número entre 1 e 12, envergonhado com seu erro.';
            break;
    }
}

//5 –-> Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.
function maiorNum(num1, num2){
    if(num1 >= num2){
        return 'Primeiro valor é igual ou maior que o segundo.';
    }
    else {
        return 'Segundo valor é igual ou maior que o primeiro.';
    }
}

function compara(numA, numB, callback){
    return callback(numA, numB);
}