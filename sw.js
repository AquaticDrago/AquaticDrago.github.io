self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: 'perro.png',  // Ruta al icono en la raíz
        badge: 'images/notification_badge.png', // Si tienes un badge, especifica la ruta aquí
    };

    event.waitUntil(
        self.registration.showNotification('Tienda de Mascotas', options)
    );
});
