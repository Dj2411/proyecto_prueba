let usuariosRegistrados = [];

// Cargar usuarios desde el archivo JSON
const cargarUsuarios = async () => {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/67005cf1acd3cb34a89146c9'); // URL de tu archivo JSON
        const data = await response.json();
        usuariosRegistrados = data.record.usuarios; // Acceder al array 'usuarios' dentro de 'record'
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
};

// Función para mostrar errores en la página
const mostrarErrorEnPagina = (mensaje) => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensaje;
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
    }, 3000);
};

// Función para validar el usuario y la contraseña
const validarCredenciales = (username, password) => {
    return usuariosRegistrados.find(user => user.username === username && user.password === password);
};

// Función para manejar el envío del formulario
const mostrarMensaje = async (event) => {
    event.preventDefault();

    const usuarioValue = document.getElementById("username").value.trim();
    const contraseñaValue = document.getElementById("password").value.trim();

    const usuarioValido = validarCredenciales(usuarioValue, contraseñaValue);

    if (!usuarioValido) {
        mostrarErrorEnPagina("Usuario o contraseña incorrectos.");
        return;
    }

    // Guardar el nombre de usuario en localStorage
    localStorage.setItem('username', usuarioValue);

    // Redirigir según el rol
    switch (usuarioValido.role) {
        case "Administrador":
            window.location.href = "../html/admin.html";
            break;
        case "Rector":
            window.location.href = "../html/rector.html";
            break;
        case "Docente":
            window.location.href = "../html/docente.html";
            break;
        case "Estudiante":
            window.location.href = "../html/estudiante.html";
            break;
        default:
            mostrarErrorEnPagina("Rol no válido");
    }
};

// Función para verificar si el usuario está logueado al cargar la página
const verificarLogin = () => {
    if (localStorage.getItem('username')) {
        // Redirigir a una página predeterminada o según el rol si ya está logueado
        window.location.href = "../html/login.html"; // Cambia a la página que prefieras
    }
};

// Función para evitar que se use el caché al cerrar sesión
const prevenirCache = () => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
};

// Cargar los usuarios al iniciar
cargarUsuarios();

// Verificar si el usuario está logueado al cargar la página
verificarLogin();

// Prevenir que se cargue la página desde el caché
prevenirCache();

// Agregar evento al formulario
document.getElementById("loginForm").addEventListener("submit", mostrarMensaje);
