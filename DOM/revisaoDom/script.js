// manipulacao DOM
//criar um header -> DOM
let header = document.createElement("header");
//style do header
header.style.backgroundColor = "black";
header.style.height = "8vh";
//adicionar o header -> body
document.body.appendChild(header);
document.body.style.margin = 0;
//criar uma navBAr
let navBAr = document.createElement("div");
navBAr.classList.add("navBar");
//adicionar a navBar -> header
header,appendChild(navBAr);
//prencher a navBar
let menuItens = ["Home", "About", "Products", "Contact"];
menuItens.forEach(element => {
    let a = document.createElement("a");
    a.innerText = element;
    a.classList.add("menuItens");
    navBAr.appendChild(a);

});
let footer = document.createElement("footer");
//style do footer
footer.styleBackground = "black";
footer.style.heigth = "5vh";
footer.style.width = "100%";
footer.style.position = "absolute";
footer.style.bottom = "0";
//adicionar o footer -> body
document.body.appendChild(footer);
//adicionar elementos no footer
let bottomNavBar = document.createElelemnt("div");
bottomNavBar.classList>add("bottomNavBar");
//bottomNavBar -> footer
footer.appendChild(bottomNavBar);
//itens footer
let footerItens = ["Redes Sociais", "CopyRight", "Endereço"];
footerItens.forEach(elements => {
    let a = document.createElement("a");
    a.innerText = element;
    a.classList.add("footerItens");
    bottomNavBar.appendChild(a);
});