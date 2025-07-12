import { body } from 'express-validator';

export const validationRules = () => [
  body('nombreSuperHeroe')
    .trim()
    .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres.')
    .custom(value => {
      if (typeof value !== 'string' || !isNaN(value)) {
        throw new Error('El nombre del superhéroe debe ser una cadena de texto.');
      }
      return true;
    })
    .escape(),

  body('nombreReal')
    .trim()
    .notEmpty().withMessage('El nombre real del superhéroe es obligatorio.')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre real del superhéroe debe tener entre 3 y 60 caracteres.')
    .custom(value => {
      if (typeof value !== 'string' || !isNaN(value)) {
        throw new Error('El nombre real del superhéroe debe ser una cadena de texto.');
      }
      return true;
    })
    .escape(),

  body('edad')
    .trim()
    .notEmpty().withMessage('La edad del superhéroe es obligatoria.')
    .custom(value => {
      if (value === '-0') {
        throw new Error('La edad del superhéroe no puede ser -0.');
      }
      return true;
    })
    .isInt({ min: 0 }).withMessage('La edad del superhéroe debe ser un número entero, mayor o igual a 0.')
    .toInt(),

  body('planetaOrigen')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 3, max: 60 }).withMessage('El planeta de origen del superhéroe debe tener entre 3 y 60 caracteres.')
    .custom(value => {
      if (typeof value !== 'string' || !isNaN(value)) {
        throw new Error('El planeta de origen del superhéroe debe ser una cadena de texto.');
      }
      return true;
    })
    .escape(),

  body('debilidad')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 3, max: 60 }).withMessage('La debilidad del superhéroe debe tener entre 3 y 60 caracteres.')
    .custom(value => {
      if (typeof value !== 'string' || !isNaN(value)) {
        throw new Error('La debilidad del superhéroe debe ser una cadena de texto.');
      }
      return true;
    })
    .escape(),

  body('poderes')
    .custom(arr => {
      if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Los poderes del superhéroe deben ser de tipo array y son obligatorios.');
      }

      arr.forEach(poder => {
        if (!poder.trim()) {
          throw new Error('Los poderes del superhéroe no pueden estar vacíos.');
        }
        if (typeof poder !== 'string' || !isNaN(poder)) {
          throw new Error('Cada poder del superhéroe debe ser una cadena de texto.');
        }
        if (poder.length < 3 || poder.length > 60) {
          throw new Error('Cada poder del superhéroe debe tener entre 3 y 60 caracteres.');
        }
      });

      return true;
    }),

  body('aliados')
    .optional({ checkFalsy: true })
    .custom(arr => {
      if (!Array.isArray(arr)) {
        throw new Error('Los aliados del superhéroe deben ser de tipo array.');
      }

      arr.forEach(aliado => {
        if (!aliado.trim()) {
          throw new Error('Los aliados del superhéroe no pueden estar vacíos.');
        }
        if (typeof aliado !== 'string' || !isNaN(aliado)) {
          throw new Error('Cada aliado del superhéroe debe ser una cadena de texto.');
        }
        if (aliado.length < 3 || aliado.length > 60) {
          throw new Error('Cada aliado del superhéroe debe tener entre 3 y 60 caracteres.');
        }
      });

      return true;
    }),

  body('enemigos')
    .optional({ checkFalsy: true })
    .custom(arr => {
      if (!Array.isArray(arr)) {
        throw new Error('Los enemigos del superhéroe deben ser de tipo array.');
      }

      arr.forEach(enemigo => {
        if (!enemigo.trim()) {
          throw new Error('Los enemigos del superhéroe no pueden estar vacíos.');
        }
        if (typeof enemigo !== 'string' || !isNaN(enemigo)) {
          throw new Error('Cada enemigo del superhéroe debe ser una cadena de texto.');
        }
        if (enemigo.length < 3 || enemigo.length > 60) {
          throw new Error('Cada enemigo del superhéroe debe tener entre 3 y 60 caracteres.');
        }
      });

      return true;
    }),

  body('creador')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 3, max: 60 }).withMessage('El nombre de creador del superhéroe debe tener entre 3 y 60 caracteres.')
    .custom(value => {
      if (typeof value !== 'string' || !isNaN(value)) {
        throw new Error('El nombre de creador del superhéroe debe ser una cadena de texto.');
      }
      return true;
    })
    .escape()
];