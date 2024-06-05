document.addEventListener('DOMContentLoaded', function () {
    // Cargar fotos en la galería
    const gallery = document.querySelector('.gallery');
    const photos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg']; // Reemplaza con nombres de tus fotos
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `img/${photo}`;
        img.alt = 'Foto de la boda';
        gallery.appendChild(img);
    });

    // Manejar envío de formulario de contacto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        alert(`Gracias por tu mensaje, ${name}!`);
        form.reset();
    });
});
