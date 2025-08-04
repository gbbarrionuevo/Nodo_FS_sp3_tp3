import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  crearSuperheroe,
  actualizarSuperheroe,
  eliminarSuperheroe,
  obtenerSuperheroesMayoresDe30,
  eliminarSuperheroePorNombre
} from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();

    res.render('dashboard', {
      superheroes,
      message: req.query.message || null,
      error: req.query.error || null
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los superhéroes.',
      error: error.message
    });
  }
}

export async function formularioCrearSuperheroeController(req, res) {
  try {
    res.render('addSuperhero', {
      message: req.query.message || null,
      error: req.query.error || null
    });
  } catch (error) {
    res.redirect('/api/heroes?error=Error al cargar el formulario de creación.');
  }
}

export async function agregarSuperheroeController(req, res) {
  try {
    const nuevoSuperHeroe = req.body;
    await crearSuperheroe(nuevoSuperHeroe);

    res.redirect('/api/heroes?message=Superhéroe creado correctamente.');
  } catch (error) {
    res.redirect('/api/heroes?error=Error al crear superhéroe.');
  }
}

export async function formularioEditarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if (!superheroe) {
      return res.redirect('/api/heroes?error=Superhéroe no encontrado.');
    }

    res.render('editSuperhero', {
      superheroe,
      message: req.query.message || null,
      error: req.query.error || null
    });
  } catch (error) {
    res.redirect('/api/heroes?error=Error al buscar superhéroe.');
  }
}

export async function editarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const datosSuperHeroe = req.body;

    const superheroe = await actualizarSuperheroe(id, datosSuperHeroe);

    if (!superheroe) {
      return res.redirect('/api/heroes?error=Superhéroe no encontrado.');
    }

    res.redirect('/api/heroes?message=Superhéroe actualizado correctamente.');
  } catch (error) {
    res.redirect('/api/heroes?error=Error al actualizar el superhéroe.');
  }
}

export async function eliminarSuperheroeController(req, res) {
  try {
    const { id } = req.params;

    const superheroe = await eliminarSuperheroe(id);

    if (!superheroe) {
      return res.redirect('/api/heroes?error=Superhéroe no encontrado.');
    }

    res.redirect('/api/heroes?message=Superhéroe eliminado correctamente.');
  } catch (error) {
    res.redirect('/api/heroes?error=Error al eliminar el superhéroe.');
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  try {
    const superheroes = await obtenerSuperheroesMayoresDe30();

    if (superheroes.length === 0) {
      return res.status(404).send({ message: "No se encontraron superhéroes mayores de 30 años" });
    }

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    res.status(500).send({ message: 'Error al obtener superhéroes mayores de 30', error: error.message });
  }
}

export async function eliminarSuperheroePorNombreController(req, res) {
  try {
    const { nombre } = req.params;

    const superheroe = await eliminarSuperheroePorNombre(nombre);

    if (!superheroe) {
      return res.status(404).send({ message: 'Superhéroe no encontrado.' });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json({ message: 'Superhéroe eliminado correctamente.', data: superheroeFormateado });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar superhéroe por nombre.', error: error.message });
  }
}