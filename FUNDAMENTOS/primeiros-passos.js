//PRIMEIROS PASSOS - EXERCICIOS DE FIXAÇÃO - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS DE FIXAÇÃO - DIA 1 - PRIMEIROS PASSOS - 


//VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS
console.log('VARIAVEIS:');
let myName = 'Aissa';
let birthCity = 'Belo horizonte';
let birthYear = 2001 ;
console.log('meu nome é ' + myName + ' minha cidade natal fica em ' + birthCity + ' nascida no ano de: ' + birthYear + '.')


//VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS-VARIAVEIS

//TIPOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PR
console.log('TIPOS-PRIMITIVOS:');
let base = 5;
let heigth = 8;
let area = base * heigth;
let perimeter = 2 * (base + heigth);
console.log('A area de um retangulo é: ' + area +  ' e o perimetro é de ' + perimeter + '.');
//TIPOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PRIMITIVOS-PR

//IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-
console.log('IF-ELSE:');
let nota = 50;
if (nota >= 80 && nota <= 100){
   console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
}else if (nota <80 && nota >= 60){
    console.log('Você está na nossa lista de espera');
}else if (nota < 60){
    console.log('Infelizmente, você reprovou');
}else {
    console.log('valor invalido');
    
};
//IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-ELSE-IF-

//OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGI
console.log('OPERADORES-LOGICOS:');
let weekDay = 'quarta-feira';
if (weekDay = 'segunda-feira' || 'terça-feira' || 'quarta-feira' || 'quinta-feira' || 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}else if (weekDay = 'sabádo' || 'domingo'|| 'sabado' || 'fim de semana'){
    console.log('FINALMENTE, descanso merecido! UwU!')
}
//OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGICOS-OPERADORES-LOGI

//SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CA
console.log('SWITCH-CASE:');
let candidate = 'reprovado';
switch (candidate){
    case 'aprovada', 'aprovado':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!')
        break;
    case 'reprovada', 'reprovado':
        console.log('Infelizmente, você reprovou.')
        break;
    default:
    console.log('valor não identificado');
}
//SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CASE-SWITCH-CA

//EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS 
console.log('EXERCICIOS - AGORA É PRATICA:');
let a = 8;
let b = 4;
 
console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS
console.log('EXERCICIOS - AGORA É PRATICA: IF/ELSE PAR') 
let e = 594
let f = 16
let g = 3
if( e % 2 === 0|| f % 2  === 0 || g % 2 === 0){
    console.log('true')
}else {
    console.log ('false')
}
//EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS
console.log('EXERCICIOS - AGORA É PRATICA: IF/ELSE IMPAR') 
let i = 7
let j = 10
let k = 93

if( i % 2 !== 0|| j % 2  !== 0 || k % 2 !== 0){
    console.log('true')
}else {
    console.log ('false')
}
//EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS - AGORA É PRATICA - DIA 1 - PRIMEIROS PASSOS - EXERCICIOS


// Bônus: use somente um if.
// Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
let preco = 15
let venda = 35
let lucro =([venda - preco] *1000)
console.log(lucro)


// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
// Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.