import superHeroRepository from '../repositories/SuperHeroRepository.mjs';
import SuperHero from '../models/SuperHero.mjs';

export async function obtenerSuperheroePorId(id) {
  return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function crearSuperheroe(nuevoSuperHeroe) {
  const superheroe = new SuperHero(nuevoSuperHeroe);
  return await superHeroRepository.guardar(superheroe);
}

export async function actualizarSuperheroe(id, datosSuperHeroe) {
  const superheroe = await superHeroRepository.obtenerPorId(id);

  if (!superheroe) {
    return null;
  }

  for (const key in datosSuperHeroe) {
    superheroe[key] = datosSuperHeroe[key];
  }

  return await superHeroRepository.guardar(superheroe);
}

export async function eliminarSuperheroe(id) {
  const superheroe = await superHeroRepository.obtenerPorId(id);

  if (!superheroe) {
    return null;
  }

  return await superHeroRepository.eliminar(superheroe);
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