// Obtener elementos del DOM
const titulo = document.getElementById("titulo");
const btnTexto = document.getElementById("cambiarTexto");
const btnColor = document.getElementById("cambiarColor");

// Evento para cambiar el texto
btnTexto.addEventListener("click", () => {
  titulo.textContent = "Texto cambiado con JavaScript";
});

// Evento para cambiar el color
btnColor.addEventListener("click", () => {
  titulo.style.color = titulo.style.color === "crimson" ? "navy" : "crimson";
});