class IRepository {
  obtenerTodos() {
    throw new Error('Este método debe ser implementado por la subclase');
  }

  guardar(superheroe) {
    throw new Error('Este método debe ser implementado por la subclase');
  }

  eliminar(id) {
    throw new Error('Este método debe ser implementado por la subclase');
  }
}

export default IRepository;