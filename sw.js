self.addEventListener('install', event => {
    console.log('Service Worker instalado correctamente.');
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll(['./', './index.php', './manifest.json']);
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('Interceptando petición:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

// Manejo de las notificaciones y acciones
self.addEventListener('notificationclick', event => {
    const action = event.action;

    if (action === 'comprar') {
        clients.openWindow('https://www.tienda-de-mascotas.com'); // Cambia por tu URL
    } else if (action === 'cerrar') {
        event.notification.close();
    } else {
        event.notification.close(); // Acción por defecto
    }

    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            if (windowClients.length > 0) {
                windowClients[0].focus();
            }
        })
    );
});
