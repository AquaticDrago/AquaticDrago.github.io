self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : '¡Nueva notificación desde la Tienda de Mascotas!',
        icon: 'perro.png', // Icono de la raíz
        badge: 'https://img.icons8.com/ios/452/dog.png', // Badge público
    };

    event.waitUntil(
        self.registration.showNotification('Tienda de Mascotas', options)
    );
});
