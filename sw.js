self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: 'perro.png',  // Ruta al icono en la raíz
        badge: 'https://img.icons8.com/ios/452/dog.png',
    };

    event.waitUntil(
        self.registration.showNotification('Tienda de Mascotas', options)
    );
});
