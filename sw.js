self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: 'perro.png',  // Ruta al icono en la raíz
        badge: 'download.jpeg',
    };

    event.waitUntil(
        self.registration.showNotification('Tienda de Mascotas', options)
    );
});
