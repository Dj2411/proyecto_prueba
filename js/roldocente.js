document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const role = document.getElementById('role').value;
        let redirectUrl = '';

        switch(role) {
            case 'admin':
                redirectUrl = '../html/admin.html';
                break;
            case 'rector':
                redirectUrl = "../html/rector.html";
                break;
            case 'docente':
                redirectUrl = '../html/docente.html';
                break;
            case 'estudiante':
                redirectUrl = '../html/estudiante.html';
                break;
            default:
                alert('Role no válido');
                return;
        }

        // Perform the redirection
        window.location.href = redirectUrl;
    });
});
