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

  async guardar(superheroe) {
    return await superheroe.save();
  }

  async eliminar(superheroe) {
    return await superheroe.deleteOne();
  }
}

export default new SuperHeroRepository();