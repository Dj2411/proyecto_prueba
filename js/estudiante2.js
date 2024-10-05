document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: [
            {
                title: 'Baile contemporáneo',
                daysOfWeek: [1, 3], // Lunes y Miércoles
                startTime: '16:00',
                endTime: '18:00',
                description: 'Salón de Usos Múltiples'
            },
            {
                title: 'Club de Debate',
                daysOfWeek: [2, 4], // Martes y Jueves
                startTime: '15:00',
                endTime: '17:00',
                description: 'Aula 205'
            },
            {
                title: 'Taller de Arte',
                daysOfWeek: [5], // Viernes
                startTime: '14:00',
                endTime: '16:00',
                description: 'Sala de Arte'
            }
        ],
        eventClick: function(info) {
            alert(info.event.title + '\n' + info.event.extendedProps.description + '\n' + info.event.start.toLocaleTimeString());
        }
    });

    calendar.render();
});
