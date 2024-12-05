document.getElementById('sendNotification').addEventListener('click', async () => {
    const permissionGranted = await requestNotificationPermission();
    
    if (permissionGranted) {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.showNotification('Consientelos como se merecen 🐱🐶', {
                body: '¡Recuerda comprar alimento para tus mascotas!',
                icon: 'https://via.placeholder.com/192', // Icono público de ejemplo
                badge: 'https://via.placeholder.com/72', // Badge para la notificación
            });
        }
    }
});
