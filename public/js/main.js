import { agregarCampo, forzarArraysVacios  } from './form-utils.js';
import { confirmarEnvio } from './confirm-submit.js';
import { inicializarDatatable } from './datatables-init.js';

window.agregarCampo = agregarCampo;
window.confirmarEnvio = confirmarEnvio;

inicializarDatatable();

// Se ejecuta sólo si existe el formulario de edición
const form = document.querySelector('form[action*="editar"]');
if (form) {
  forzarArraysVacios(form, ['aliados', 'enemigos']);
}