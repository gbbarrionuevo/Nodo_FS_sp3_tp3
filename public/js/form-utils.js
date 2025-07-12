export function agregarCampo(contenedorId, nombre) {
  const contenedor = document.getElementById(contenedorId);

  const div = document.createElement("div");
  div.className = "flex items-center gap-2 mt-2";

  const input = document.createElement("input");
  input.type = "text";
  input.name = nombre + "[]";
  input.className = "block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-sm";

  input.minLength = 3;
  input.maxLength = 60;

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.title = "Eliminar";
  btnEliminar.className = "border-0 bg-transparent p-0 m-0 cursor-pointer text-red-500 hover:text-red-700 focus:outline-none focus:ring-0 transition";
  btnEliminar.innerHTML = '<i class="fa-solid fa-times"></i>';

  if (nombre === 'poderes') {
    input.required = true;

    btnEliminar.onclick = () => {
      const total = contenedor.querySelectorAll('.flex');
      if (total.length > 1) {
        contenedor.removeChild(div);
      }
    };
  } else {
    btnEliminar.onclick = () => {
      contenedor.removeChild(div);
    };
  }

  div.appendChild(input);
  div.appendChild(btnEliminar);
  contenedor.appendChild(div);
}