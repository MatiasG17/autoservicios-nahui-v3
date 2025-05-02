// script.js
const imagenes = [
    'Imágenes/Fondo1.png',
    'Imágenes/Fondo2.jpg',
    'Imágenes/Fondo3.jpg',
    'Imágenes/Fondo4.jpg',
    'Imágenes/Fondo5.jpg'
  ];
  
  
  let indiceActual = 0;
  const heroSection = document.getElementById('hero');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function actualizarFondo() {
    heroSection.style.backgroundImage = `url('${imagenes[indiceActual]}')`;
  }
  
  prevBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarFondo();
  });
  
  nextBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarFondo();
  });
  
  // Asegura que la imagen inicial esté correcta al cargar
  actualizarFondo();
  

    // Servicio seleccionado con imagen y subtítulo
  const cards = document.querySelectorAll('.service-cards .card');
  const contenedorServicio = document.getElementById('servicio-seleccionado');
  const imagenServicio = document.getElementById('imagen-servicio');
  const subtituloServicio = document.getElementById('nombre-servicio'); // Subtítulo dinámico
  const btnLimpiar = document.getElementById('btn-limpiar');

  // Mapear servicios con imágenes
  const imagenesServicios = {
    "Mantenimiento GNV y GLP": "Imágenes/Servicio1.jpg",
    "Certificación Anual": "Imágenes/Servicio2.jpg",
    "Certificación Quinquenal": "Imágenes/Servicio3.jpg",
    "Conversiones a GNV y GLP": "Imágenes/Servicio4.jpg",
    "Venta de Repuestos": "Imágenes/Servicio5.jpg"
  };

  // Evento click en cada card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const titulo = card.querySelector('h3').innerText;
      const rutaImagen = imagenesServicios[titulo];

      if (rutaImagen) {
        imagenServicio.src = rutaImagen;
        subtituloServicio.textContent = titulo; // Mostrar subtítulo
        contenedorServicio.classList.remove('oculto');
      }
    });
  });

  // Limpiar botón
  btnLimpiar.addEventListener('click', () => {
    imagenServicio.src = '';
    subtituloServicio.textContent = ''; // Limpiar subtítulo
    contenedorServicio.classList.add('oculto');
  });