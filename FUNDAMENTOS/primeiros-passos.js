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
