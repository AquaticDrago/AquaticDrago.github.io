<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff5722">
    <link rel="manifest" href="manifest.json">
    <title>Tienda de Mascotas</title>
    <script src="push.js" defer></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        header {
            background-color: #ff5722;
            color: white;
            padding: 1em;
        }
        button {
            background-color: #ff5722;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #e64a19;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bienvenido a la Tienda de Mascotas</h1>
    </header>
    <main>
        <p>¡Encuentra los mejores productos para tu mascota!</p>
        <button id="sendNotification">Enviar Notificación Push</button>
    </main>

    <script>
        // Registro del Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service Worker registrado:', reg))
                .catch(err => console.error('Error al registrar el Service Worker:', err));
        }

        // Botón para enviar notificaciones
        document.getElementById('sendNotification').addEventListener('click', () => {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.ready.then(reg => {
                    reg.showNotification('Tienda de Mascotas', {
                        body: '¡Tenemos ofertas especiales para tu mascota hoy!',
                        icon: 'icon.png',
                    });
                });
            } else {
                alert('Notificaciones push no son compatibles con este navegador.');
            }
        });
    </script>
</body>
</html>
