// Obtenemos el botón de hamburguesa y el menú
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

// Agregamos un evento clic al botón de hamburguesa para mostrar/ocultar el menú
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle (agregar/quitar) la clase "active" al menú
});

