import { validationResult } from 'express-validator';

export const validationErrorsForViews = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const mensajes = errors.array().map(error => error.msg);
    const datos = req.body;
    const { originalUrl, params } = req;

    if (originalUrl.includes('/agregar')) {
      return res.status(400).render('addSuperhero', {
        error: mensajes,
        message: null,
        superheroe: datos
      });
    }

    if (originalUrl.includes('/editar') && params.id) {
      return res.status(400).render('editSuperhero', {
        error: mensajes,
        message: null,
        superheroe: { ...datos, _id: params.id }
      });
    }

    return res.status(400).send('Error de validación');
  }

  next();
};

export const validationErrorsForAPI = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Error de validación',
      errors: errors.array().map(error => ({
        field: error.param,
        message: error.msg
      }))
    });
  }

  next();
};