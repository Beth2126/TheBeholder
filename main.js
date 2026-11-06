// Menú del programa. Se ejecuta al abrir index.html.
//
// Hito 1: muestra aquí tus tres arrays con console.table.

console.table(productos);
console.table(clientes);
console.table(pedidos);

// Hito 4: convierte este fichero en un menú que
//   - pide la opción con prompt
//   - muestra los resultados con console.table o alert
//   - pide confirmación con confirm antes de borrar
//   - captura los errores con try…catch y los muestra sin que el programa se rompa
//   - resiste que el usuario cancele, deje la entrada vacía o escriba una opción que no existe:

// Hito 4

// Menú interactivo 

/**
 * Función auxiliar para pedir un número entero por prompt.
 * Lanza error si se cancela o si no es un número válido.
 */
   const pedirNumero = (mensaje) => {
   const respuesta = prompt(mensaje);
   if (respuesta === null) {
    throw new Error("Operación cancelada por el usuario");
  }
  const limpio = respuesta.trim();
  if (limpio === "" || Number.isNaN(Number(limpio))) {
    throw new Error("Debe introducir un número válido");
  }
  return Number(limpio);
   };

// Generador de ID basado en el último ID actual de productos
   const obtenerUltimoId = () => {
   if (productos.length === 0) return 0;
   return productos[productos.length - 1][PR_ID];
   };

   const siguienteId = crearGeneradorId(obtenerUltimoId());

   function iniciarMenu() {
   let salir = false;

   while (!salir) {
    const opcion = prompt(
      "--- TIENDA THE BEHOLDER --- \n" +
      "1. Listar todos los productos\n" +
      "2. Buscar producto por ID\n" +
      "3. Filtrar productos por categoría\n" +
      "4. Ver valor total del stock\n" +
      "5. Comprobar productos duplicados (Regla personal)\n" +
      "6. Dar de alta un nuevo producto\n" +
      "7. Dar de baja un producto por ID\n" +
      "8. Salir\n\n" +
      "Elige una opción:"
    );

    if (opcion === null) {
      salir = true;
      break;
    }

    try {
      const opcionLimpia = opcion.trim();

      const opcionesMenu = {
        "1": () => {
          console.table(productos);
          alert("Lista de productos mostrada en la consola (F12).");
        },
        "2": () => {
          const idBuscado = pedirNumero("Introduce el ID del producto a buscar:");
          const productoEncontrado = buscarPorId(idBuscado);
          if (productoEncontrado === undefined) {
            alert("No se ha encontrado ningún producto con ese ID.");
          } else {
            console.table([productoEncontrado]);
            alert("Producto encontrado. Revísalo en la consola (F12).");
          }
        },
        "3": () => {
          const categoria = prompt("Introduce la categoría (ej: Cartas, Estrategia, RPG):");
          if (categoria !== null && categoria.trim() !== "") {
            const resultadoCat = productosPorCategoria(categoria.trim());
            console.table(resultadoCat);
            alert(`Se han encontrado ${resultadoCat.length} productos en esa categoría. Mira la consola.`);
          }
        },
        "4": () => {
          const total = valorStock();
          alert(`El valor total del stock en el almacén es de ${total} €.`);
        },
        "5": () => {
          const duplicados = productosDuplicados(productos);
          if (duplicados.length === 0) {
            alert("No hay productos duplicados en el catálogo.");
          } else {
            console.table(duplicados);
            alert(`Se han encontrado nombres duplicados (normalizados): ${duplicados.join(", ")}. Mira la consola.`);
          }
        },
        "6": () => {
          const nombre = prompt("Introduce el nombre del juego:");
          const marca = prompt("Introduce la marca/editorial:") || "";
          const categoria = prompt("Introduce la categoría:") || "";
          const stock = pedirNumero("Introduce las unidades de stock:");
          const precio = prompt("Introduce el precio (ej: 29,95):") || "0";

          // Altas inmutables: actualizamos la lista global con el nuevo estado devuelto
          productos = altaProducto(productos, nombre, marca, categoria, stock, precio, siguienteId);
          alert("¡Producto dado de alta con éxito!");
          console.table(productos);
        },
        "7": () => {
          const idBaja = pedirNumero("Introduce el ID del producto que quieres eliminar:");
          const productoABorrar = buscarPorId(idBaja);
          
          if (productoABorrar === undefined) {
            throw new Error("No existe ningún producto con ese ID para borrar.");
          }

          const confirmar = confirm(`¿Seguro que deseas eliminar el producto "${productoABorrar[PR_NOMBRE]}"?`);
          if (confirmar) {
            // Bajas inmutables: actualizamos la lista global con el nuevo estado filtrado
            productos = bajaProducto(productos, idBaja);
            alert("Producto eliminado correctamente.");
            console.table(productos);
          } else {
            alert("Operación de baja cancelada.");
          }
        },
        "8": () => {
          alert("Saliendo del gestor de The Beholder. ¡Hasta pronto!");
          salir = true;
        }
      };

      const accion = opcionesMenu[opcionLimpia];
      if (accion) {
        accion();
      } else {
        alert("Opción no válida. Por favor, elige un número del 1 al 8.");
      }

    } catch (error) {
      alert("Error: " + error.message);
    }
  }
}

// Ejecutar el menú al cargar la página
iniciarMenu();

console.log("La plantilla funciona. Abre la consola (F12) para ver tus resultados.");
