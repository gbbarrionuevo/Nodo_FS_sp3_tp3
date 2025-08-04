import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
  return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function crearSuperheroe(nuevoSuperHeroe) {
  return await superHeroRepository.crear(nuevoSuperHeroe);
}

export async function actualizarSuperheroe(id, datosSuperHeroe) {
  const superheroe = await superHeroRepository.obtenerPorId(id);

  if (!superheroe) {
    return null;
  }

  // Convierto string vacío en array vacío sólo cuando desde el form crear/edit heroes no se envian valores para aliados/enemigos
  ['aliados', 'enemigos'].forEach(campo => {
    if (typeof datosSuperHeroe[campo] === 'string' && datosSuperHeroe[campo].trim() === '') {
      datosSuperHeroe[campo] = [];
    }
  });

  return await superHeroRepository.actualizar(id, datosSuperHeroe);
}

export async function eliminarSuperheroe(id) {
  const superheroe = await superHeroRepository.obtenerPorId(id);

  if (!superheroe) {
    return null;
  }

  return await superHeroRepository.eliminar(superheroe);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30();
}

export async function eliminarSuperheroePorNombre(nombre) {
  const superheroe = await superHeroRepository.obtenerPorNombre(nombre);

  if (!superheroe) {
    return null;
  }

  const copiaSuperheroe = superheroe.toObject();
  await superHeroRepository.eliminar(superheroe);

  return copiaSuperheroe;
}