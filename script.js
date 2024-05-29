/* Al ingresar al sitio pide que se ingrese el color favorito da acceso si el color favorito es rosa y si es otro alerta que tenga cuidado*/
let color = prompt("Ingresa tu color favorito");
if (color.toLowerCase() === "rosa") {
  alert("Wow! Vas a disfrutar mucho de esta pagina! Bienvenida/o");
} 
else{
    alert (" CUIDADO! Esta pagina te puede resultar empalagosa");
}
/*funcion saludo*/
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
/*ventana de alerta*/
alert("SE FELIZ EN UN MUNDO ROSA!");

