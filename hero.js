const botaoMenu = document.querySelector(".botao");
const menu = document.querySelector("ul");

console.log(botaoMenu, menu)

botaoMenu.addEventListener("click", mostraMenu);

function mostraMenu(){
   menu.classList.toggle("show");
}

