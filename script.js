document.getElementById('sendNotification').addEventListener('click', async () => {
    const permissionGranted = await requestNotificationPermission();
    
    if (permissionGranted) {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('¡Hola desde la Tienda de Mascotas!', {
                body: '¡Recuerda comprar todo lo necesario para tu mascota!',
                icon: 'perro.png',  // Ruta local al icono en la raíz
                badge: 'images/notification_badge.png', // Si tienes un badge puedes especificar aquí
            });
        }
    }
});

async function requestNotificationPermission() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    } else {
        alert('Las notificaciones no están soportadas en este navegador');
        return false;
    }
}
