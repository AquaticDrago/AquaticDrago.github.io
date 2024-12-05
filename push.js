// Solicitar permisos para las notificaciones
if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
        console.log('Permisos de notificación:', permission);
        if (permission !== 'granted') {
            alert('Debes conceder permisos para recibir notificaciones.');
        }
    });
}
