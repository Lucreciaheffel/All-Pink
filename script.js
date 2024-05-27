let color = prompt("Ingresa tu color favorito");

if (color.toLowerCase() === "rosa") {
  alert("Wow! Vas a disfrutar mucho de esta pagina! Bienvenida/o");
} 
else{
    alert (" CUIDADO! Esta pagina te puede resultar empalagosa");
}

let nom = prompt("Ingresa tu nombre");
function saludo() {
    if (nom) {
        alert("bienvenida/o " + nom);
    }
    else {
        alert("tenes que ingresar un nombre");
    }
}
saludo();

alert("SE FELIZ EN UN MUNDO ROSA!");

