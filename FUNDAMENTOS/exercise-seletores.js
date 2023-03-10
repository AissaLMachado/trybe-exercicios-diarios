document.getElementById("page-title").innerHTML = "O GATO DE BOTAS!";
//
const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "blue";
      paragraph.style.fontSize = "30px";
      paragraph.style.height = '100px';
      paragraph.style.backgroundColor = 'purple';
      paragraph.style.fontWeight = '100px';
//
document.getElementById("subtitle").innerHTML = "ASSISTA AQUI:";
const subtitle = document.getElementById("subtitle");
subtitle.style.color = "blue";
//

document.getElementsByClassName("teste")
const teste = document.getElementsByClassName("teste");
for (let i = 0; i < teste.length; i += 1) {
teste[i].style.color = "blue";
teste[i].style.fontSize = "30px";
}
//

//Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
const h4 = document.getElementsByTagName("h4");
h4[0].style.color = "pink";
h4[0].style.fontSize = "30px";