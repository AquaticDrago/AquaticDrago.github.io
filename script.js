// Solicitar permisos para las notificaciones
async function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            alert('Permiso denegado para notificaciones.');
            return false;
        }
    }
    return true;
}

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registrado correctamente.'))
            .catch(error => console.log('Error al registrar el Service Worker:', error));
    });
}

document.getElementById('sendNotification').addEventListener('click', async () => {
    const permissionGranted = await requestNotificationPermission();
    
    if (permissionGranted) {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('¡Hola desde la Tienda de Mascotas! 🐶🐱', {
                body: '¡Recuerda comprar todo lo necesario para tu mascota!',
                icon: 'https://via.placeholder.com/192',
                badge: 'https://via.placeholder.com/72',
            });
        }
    }
});
