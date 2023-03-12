// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
// document.getElementsByTagName("p")[0].innerHTML = "Daqui a 2 anos me vejo especializada na area de Desenvolvimento Web";
// document.getElementsByTagName("p")[0].
// document.getElementsByTagName("p")[1].innerHTML = "Trabalhando na área e alcançando a estabilidade financeira";
const mainContent = document.querySelector(".main-content");
mainContent.style.backgroundColor = "purple";
// mainContent[1].style.backgroundColor = "white";
// const mainCenterContent = document.querySelector(".center-content")
// mainCenterContent.style.backgroundColor = "black";
// document.getElementsByTagName("h1")[0].innerHTML = 'MANIPULAÇÃOO DO DOM'
// const pList = document.getElementsByTagName("p");
// pList[0].innerText = pList[0].innerText.toUpperCase();

// // const exibir = document.getElementsByTagName("p")

// Crie e execute uma função que exiba o conteúdo de todas as tags <p>:

// Da seção principal: ou seja, com className center-content;
// Os conteúdos devem ser separados por espaços.

const pList = document.querySelectorAll(".center-content p");

const footer = document.querySelector("footer p");
let texto = "";

for (let i = 0; i < pList.length; i += 1) {
 texto += `${pList[i].innerText} `;
}
footer.innerText = texto;
console.log(texto);
