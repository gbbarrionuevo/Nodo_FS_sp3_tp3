export function confirmarEnvio(event, mensaje = '¿Estás seguro de confirmar?') {
  if (!confirm(mensaje)) {
    event.preventDefault();
  }
}