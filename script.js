// Solicitar permiso de notificaciones al cargar la página
async function requestNotificationPermission() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    } else {
        alert('Las notificaciones no están soportadas en este navegador.');
        return false;
    }
}

// Enviar notificación al hacer clic en el botón
document.getElementById('sendNotification').addEventListener('click', async () => {
    const permissionGranted = await requestNotificationPermission();

    if (permissionGranted) {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('¡Aquí Chechy🐶 desde la Tienda de Mascotas!', {
                body: '¡Recuerda comprar todo lo necesario para tu mascota! 🐱🐶',
                icon: 'perro.png', // Ruta local al icono en la raíz
                badge: 'https://img.icons8.com/ios/452/dog.png', // Badge dinámico de perrito
            });
        } else {
            alert('El Service Worker no está disponible en este navegador.');
        }
    } else {
        alert('Por favor, habilita las notificaciones para recibir actualizaciones.');
    }
});

// Función adicional para enviar notificaciones dinámicas al agregar perritos
async function sendDogNotification(dogName) {
    const permissionGranted = await requestNotificationPermission();

    if (permissionGranted) {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('Adopción', {
                body: `¡Se ha agregado a ${dogName}! 🐕`,
                icon: 'perro.png', // Icono local
                badge: 'https://img.icons8.com/ios/452/dog.png', // Badge de perrito
            });
        }
    }
}
