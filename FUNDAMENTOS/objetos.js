//🚀 Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for
console.log('EXERCICIO:OBJETO')
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  console.log(`Ola seja bem vinda ${info.personagem}`);
//🚀 Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for
console.log('EXERCICIO:OBJETO[]')
let infor = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  infor['recorrente'] = 'sim '
  console.log(infor);
 //🚀 Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for/in - Exercícios - objetos e for
 console.log('EXERCICIO: FOR/IN')
 let person = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  person['recorrente'] = 'sim '
  
  for ( let key in person ){
  console.log(key)};