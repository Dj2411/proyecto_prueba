
// Al cargar la página
window.onload = () => {
    const username = localStorage.getItem('username');

    if (username) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.innerText = `BIENVENIDO ESTUDIANTE, ${username.toUpperCase()}`;
    } else {
        // Si no hay usuario guardado, redirigir al login
        window.location.href = "../html/login.html";
    }
};
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('users.json');
        const data = await response.json();
        const usuario = data.usuarios.find(user => user.username === username && user.password === password);

        if (usuario) {
            localStorage.setItem('username', username);
            window.location.href = 'welcome.html'; // Redirigir a la página de bienvenida
        } else {
            document.getElementById('mensaje').innerText = 'Credenciales incorrectas.';
        }
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
    }
});
