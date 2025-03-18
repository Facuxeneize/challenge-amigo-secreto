//Lista de amigos
let amigosSecretos = [];

//función para agregar amigos
function AgregarAmigos(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigoSecreto= inputAmigo.value;

    if(!nombreAmigoSecreto){
        alert("Debes ingresar un nombre!");
        return;
    }

    amigosSecretos.push(nombreAmigoSecreto);

    inputAmigo.value = ' ';
    let parrafo = document.createElement("p");
    parrafo.textContent = nombreAmigoSecreto;
    parrafo.className = "Nombres";
    document.getElementById("listaAmigos").appendChild(parrafo);            
}

//Funcion para sortear amigos
function SortearAmigos(){
    let numeroDeAmigos = amigosSecretos.length;
    if (numeroDeAmigos === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    let numeroAmigoSecreto = Math.floor(Math.random() * numeroDeAmigos);
    let amigoSecreto = amigosSecretos[numeroAmigoSecreto];

    let resultadoDiv = document.getElementById("resultadoSorteo");
    resultadoDiv.innerHTML = "<p>El amigo secreto es...</p>";

    setTimeout(function() {
        resultadoDiv.innerHTML += "<p><strong>" + amigoSecreto + "</strong></p>";
    }, 2000); 
}
//Funcion para reiniciar
function reiniciar(){
    amigosSecretos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultadoSorteo").innerHTML = "";
    document.getElementById("amigo").value = "";
}