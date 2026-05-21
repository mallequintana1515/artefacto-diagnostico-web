const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function mostrarMensaje(tipo, titulo, mensaje) {
  resultado.className = 'resultado';
  resultado.classList.add(tipo);
  resultado.innerHTML = `<p class="result-status">${titulo}</p><p>${mensaje}</p>`;
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const producto = document.getElementById('producto').value.trim();
  const cantidadTexto = document.getElementById('cantidad').value.trim();
  const unidad = document.getElementById('unidad').value.trim();
  const fecha = document.getElementById('fecha').value;
  const responsable = document.getElementById('responsable').value.trim();

  if (!producto || !cantidadTexto || !unidad || !fecha || !responsable) {
    mostrarMensaje('error', 'Error de validación', 'Todos los campos son obligatorios.');
    return;
  }

  if (producto.length < 2) {
    mostrarMensaje('error', 'Error de validación', 'El nombre del producto es demasiado corto.');
    return;
  }

  if (responsable.length < 3) {
    mostrarMensaje('error', 'Error de validación', 'Ingrese el nombre completo del responsable.');
    return;
  }

  const cantidad = Number(cantidadTexto);
  if (isNaN(cantidad)) {
    mostrarMensaje('error', 'Error de validación', 'La cantidad debe ser un número válido.');
    return;
  }

  if (cantidad <= 0) {
    mostrarMensaje('error', 'Error de validación', 'La cantidad debe ser mayor que cero.');
    return;
  }

  if (cantidad > 10000) {
    mostrarMensaje('advertencia', 'Cantidad elevada', 'La cantidad ingresada es inusualmente alta. Verifique que el dato corresponda al registro real.');
    return;
  }

  mostrarMensaje(
    'exito',
    'Registro válido',
    `Producto: ${producto}<br>Cantidad: ${cantidad} ${unidad}<br>Fecha: ${formatearFecha(fecha)}<br>Responsable: ${responsable}`
  );
});
