// Solicitar permisos para las notificaciones
if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Permisos para notificaciones concedidos');
        } else {
            console.log('Permisos para notificaciones denegados');
        }
    });
}
