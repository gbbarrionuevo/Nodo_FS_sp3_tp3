export function inicializarDatatable() {
  const tabla = document.getElementById('tablaSuperheroes');

  if (!tabla) return;

  new DataTable(tabla, {
    ordering: false,
    pageLength: 5,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, 'Todos']
    ],
    responsive: true,
    language: {
      "decimal": "",
      "emptyTable": "No hay información",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ resultados",
      "infoEmpty": "Mostrando 0 a 0 de 0 resultados",
      "infoFiltered": "(filtrado de _MAX_ entradas totales)",
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": "Mostrar _MENU_ resultados",
      "loadingRecords": "Cargando...",
      "processing": "Procesando...",
      "search": "Buscar:",
      "zeroRecords": "No encontrado",
      "paginate": {
          "first": "Primero",
          "last": "Ultimo",
          "next": ">",
          "previous": "<"
      }
    }
  });
}