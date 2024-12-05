self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            return cache.addAll([
                './',
                './index.php',
                './icon.png',
                './manifest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
