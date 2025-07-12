import { param } from 'express-validator';

export const validarNombre = [
  param('nombre')
    .trim()
    .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres.')
    .escape()
];