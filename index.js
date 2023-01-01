// Primeiro Dado
var numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
var imagenAleatoria1 = "dice" + numeroAleatorio1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagenAleatoria1);


// Segundo Dado 
var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
var imagenAleatoria2 = "dice" + numeroAleatorio2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imagenAleatoria2);


// Comparação
if(numeroAleatorio1 > numeroAleatorio2){
    document.querySelector("h1").innerHTML = " Player 1 venceu!";
}else if(numeroAleatorio1 < numeroAleatorio2){
    document.querySelector("h1").innerHTML = " Player 2 venceu!";
}else{
    document.querySelector("h1").innerHTML = "Empate!";
}