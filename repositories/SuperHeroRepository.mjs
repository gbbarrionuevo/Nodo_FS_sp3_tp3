import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerPorNombre(nombre) {
    return await SuperHero.findOne({ nombreSuperHeroe: nombre });
  }

  async crear(datos) {
    return await SuperHero.create(datos);
  }

  async actualizar(id, datos) {
    return await SuperHero.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminar(superheroe) {
    return await superheroe.deleteOne();
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', 'poderes.1': { $exists: true } });
  }
}

export default new SuperHeroRepository();