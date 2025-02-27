// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Función para agregar nombres a una lista
function agregarAmigo() {

  //obtenemos los valores ingresados en el index.html, así como la lista generada
  const nombreAmigo = document.getElementById("amigo").value.trim();
  const listaAmigos = document.getElementById("listaAmigos");

  //Verificamos que la entrada no esté vacía
  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  //Agregamos elementos a la lista
  const nuevoAmigo = document.createElement("li");
  nuevoAmigo.textContent = nombreAmigo;
  listaAmigos.appendChild(nuevoAmigo);

  // Limpiamos el campo de entrada
  document.getElementById("amigo").value = ""; 
}

//Función para seleccionar un elemento de la lista mediante Math.random
function sortearAmigo() {

  //obtenemos los valores ingresados en el index.html, así como la lista generada
  const listaAmigos = document.getElementById("listaAmigos");
  const resultado = document.getElementById("resultado");
  const amigos = listaAmigos.getElementsByTagName("li");

  //Verificamos que la lista no esté vacía
  if (amigos.length === 0) {
    alert("Por favor, agrega amigos a la lista antes de sortear.");
    return;
  }

  //Seleccionamos un elemento de forma aleatoria de la lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio].textContent;

  //Mostramos el contenido de la posición de la lista seleccionada
  resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}
