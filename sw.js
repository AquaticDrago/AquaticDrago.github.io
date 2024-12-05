self.addEventListener('install', event => {
    console.log('Service Worker instalado.');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    console.log('Service Worker activado.');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://vercel.com/') // URL a abrir al hacer clic
    );
});
