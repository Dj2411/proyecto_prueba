document.addEventListener('DOMContentLoaded', function() {
    // Botón "Crear Actividad Extracurricular"
    var crearActividadBtn = document.getElementById('crearActividadBtn');
    var crearActividadForm = document.getElementById('crearActividadForm');

    crearActividadBtn.addEventListener('click', function() {
        crearActividadForm.classList.toggle('hidden');
    });

    // Botón "Formular Asistencias de grados"
    var registroGradoBtn = document.getElementById('registroGradoBtn');

    registroGradoBtn.addEventListener('click', function() {
        window.location.href = '../html/docente1.html';
    });
});
