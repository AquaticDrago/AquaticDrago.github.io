self.addEventListener('install', event => {
    console.log('Service Worker instalado correctamente.');
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll([
                './',
                './index.php',
                './manifest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('Interceptando petición:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
