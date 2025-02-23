// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {

  const nombreAmigo = document.getElementById("amigo").value.trim();

  const listaAmigos = document.getElementById("listaAmigos");


  if (nombreAmigo === "") {

    alert("Por favor, ingresa un nombre válido.");

    return;

  }


  const nuevoAmigo = document.createElement("li");

  nuevoAmigo.textContent = nombreAmigo;

  listaAmigos.appendChild(nuevoAmigo);


  document.getElementById("amigo").value = "";
 // Limpiar el campo de entrada

}



function sortearAmigo() {

  const listaAmigos = document.getElementById("listaAmigos");

  const resultado = document.getElementById("resultado");

  const amigos = listaAmigos.getElementsByTagName("li");


  if (amigos.length === 0) {

    alert("Por favor, agrega amigos a la lista antes de sortear.");

    return;
  

  }


  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSecreto = amigos[indiceAleatorio].textContent;


  resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;

}