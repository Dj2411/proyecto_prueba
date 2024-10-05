// Verificar si el usuario está logueado
if (!localStorage.getItem('username')) {
    window.location.href = "../html/login.html"; // Redirige al login si no está logueado
}

// Cerrar sesión
const cerrarSesion = () => {
    localStorage.removeItem('username'); // Elimina el nombre de usuario guardado
    window.location.href = "../html/login.html"; // Redirige al login
};

// Agregar evento al botón de cerrar sesión
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', cerrarSesion);
    }
});
