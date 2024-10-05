document.addEventListener('DOMContentLoaded', function() {
    const gradosContainer = document.getElementById('gradosContainer');

    // Definir número de grados a registrar
    const numGrados = 1;

    // Generar tarjetas para cada grado
    for (let i = 1; i <= numGrados; i++) {
        const divGrado = document.createElement('div');
        divGrado.classList.add('grado-card');

        const inputGrado = document.createElement('input');
        inputGrado.type = 'text';
        inputGrado.name = `grado${i}`;
        inputGrado.placeholder = `Grado ${i}`;
        divGrado.appendChild(inputGrado);

        const buttonRegistrar = document.createElement('button');
        buttonRegistrar.type = 'button'; // Tipo button para evitar envío automático del formulario
        buttonRegistrar.textContent = 'Registrar';
        divGrado.appendChild(buttonRegistrar);

        gradosContainer.appendChild(divGrado);
    }

    // Agregar evento clic a los botones de registrar
    gradosContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            window.location.href = '../html/docente3.html';
            const gradoInput = event.target.parentNode.querySelector('input[type="text"]');
            if (gradoInput.value.trim() !== '') {
                console.log(`Grado a registrar: ${gradoInput.value}`);
                // Aquí puedes enviar el grado a tu backend o realizar cualquier otra acción
            } else {
                alert('Por favor ingresa el grado.');
            }
        }
    });
});
