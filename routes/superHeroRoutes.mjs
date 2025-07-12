import express from 'express';
import {
  obtenerTodosLosSuperheroesController,
  formularioCrearSuperheroeController,
  agregarSuperheroeController,
  formularioEditarSuperheroeController,
  editarSuperheroeController,
  eliminarSuperheroeController,
  eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

import { validationRules } from '../middlewares/validation/superHeroRules.mjs';
import { validarNombre } from '../middlewares/validation/nombreParam.mjs';
import { validationErrorsForViews, validationErrorsForAPI } from '../middlewares/errorMiddleware.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/agregar', formularioCrearSuperheroeController);
router.post('/heroes/agregar', validationRules(), validationErrorsForViews, agregarSuperheroeController);
router.delete('/heroes/nombre/:nombre', validarNombre, validationErrorsForAPI, eliminarSuperheroePorNombreController);
router.delete('/heroes/:id', eliminarSuperheroeController);
router.get('/heroes/:id/editar', formularioEditarSuperheroeController);
router.put('/heroes/:id/editar', validationRules(), validationErrorsForViews, editarSuperheroeController);

export default router;