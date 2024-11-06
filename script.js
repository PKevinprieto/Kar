const boton = document.getElementById('cambiarTexto');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.textContent = "¡Gracias por hacer clic!";
});