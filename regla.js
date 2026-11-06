// Hito 4 · Regla personal y altas/bajas
//
// Mi regla personal (cópiala de tu ficha):
//   Duplicados por nombre normalizado

// productosDuplicados() detecta nombres de producto repetidos sin tener en cuenta mayúsculas, tildes ni espacios sobrantes. Devuelve, sin repetir, los nombres normalizados que aparecen más de una vez.

// Ejemplo: «Plátano» y «platano » → ["platano"].

// Pista: Puedes quitar las tildes sustituyendo á, é, í, ó y ú una a una con replaceAll.

// Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

//
// Aquí van también las altas y bajas en memoria. Validan los datos
// y lanzan errores con throw, por ejemplo:
//   throw new Error("Socio no encontrado");



// Duplicados por nombre normalizado

// productosDuplicados() detecta nombres de producto repetidos sin tener en cuenta mayúsculas, tildes ni espacios sobrantes. Devuelve, sin repetir, los nombres normalizados que aparecen más de una vez.

// Ejemplo: «Plátano» y «platano » → ["platano"].

// Pista: Puedes quitar las tildes sustituyendo á, é, í, ó y ú una a una con replaceAll.

// Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

// Hito de la Regla personal

/**
 * Normaliza un texto quitando tildes, mayúsculas y espacios sobrantes.
 * @param {string} texto - Texto a normalizar.
 * @returns {string} Texto limpio y en minúsculas.
 */
  function normalizarTexto(texto) {
    return String(texto)
      .toLowerCase()
      .trim()
      .replaceAll("á", "a")
      .replaceAll("é", "e")
      .replaceAll("í", "i")
      .replaceAll("ó", "o")
      .replaceAll("ú", "u");
  }

/**
 * Detecta nombres de producto repetidos sin tener en cuenta mayúsculas, tildes ni espacios sobrantes.
 * Devuelve, sin repetir, los nombres normalizados que aparecen más de una vez.
 * 
 * @param {Array<Array>} listaProductos  Lista principal de productos.
 * @returns {string[]} Nombres normalizados duplicados sin repetir.
 */
  function productosDuplicados(listaProductos) {
    const conteo = new Map();

    let posNombre = 1;
    if (typeof PR_NOMBRE !== "undefined") {
      posNombre = PR_NOMBRE;
    }

  for (const producto of listaProductos) {
    const nombreNorm = normalizarTexto(producto[posNombre]);
    let cantidadActual = conteo.get(nombreNorm);
    if (cantidadActual === undefined) {
      cantidadActual = 0;
    }
    conteo.set(nombreNorm, cantidadActual + 1);
  }

  const duplicados = [];
  for (const [nombre, veces] of conteo) {
    if (veces > 1) {
      duplicados.push(nombre);
    }
  }

  return duplicados;
}

// Hito 4: Altas y bajas y validación de campo vacío

/**
 * Valida de forma genérica que un campo no esté vacío.
 * @param {string|number} valor  Valor a comprobar.
 * @returns {boolean} True si es válido.
 */
  const esValido = (valor) => {
    if (valor === undefined || valor === null || String(valor).trim() === "") {
      return false;
    }
    return true;
  };

/**
 * Da de alta un nuevo producto de forma inmutable (devuelve una lista nueva).
 * @param {Array[]} listaProductos  Lista actual de productos.
 * @param {string} nombre  Nombre del juego de mesa.
 * @param {string} marca  Editorial o marca.
 * @param {string} categoria  Categoría del juego.
 * @param {number} stock  Unidades disponibles.
 * @param {string} precio  Precio en formato texto (ej: "29,95").
 * @param {Function} generarId  Closure generador de IDs.
 * @returns {Array[]} Nueva lista con el producto añadido al final.
 * @throws {Error} Si algún campo obligatorio no es válido.
 */
  function altaProducto(listaProductos, nombre, marca, categoria, stock, precio, generarId) {
    if (!esValido(nombre)) {
      throw new Error("El nombre del producto no puede estar vacío");
    }
    if (!esValido(precio)) {
      throw new Error("El precio del producto no puede estar vacío");
    }
    if (!Number.isInteger(Number(stock)) || Number(stock) < 0) {
      throw new Error("El stock debe ser un número entero válido");
    }

  const nombreNorm = normalizarTexto(nombre);
  const yaExiste = listaProductos.some((p) => normalizarTexto(p[PR_NOMBRE]) === nombreNorm);
  if (yaExiste) {
    throw new Error("Ya existe un producto con ese nombre");
  }

  const nuevoId = generarId();
  const nuevoProducto = [
    nuevoId,
    nombre,
    marca || "",
    categoria || "",
    Number(stock),
    String(precio)
  ];

  return [...listaProductos, nuevoProducto];
}

/**
 * Da de baja un producto por su ID de forma inmutable usando some y filter.
 * @param {Array[]} listaProductos - Lista actual de productos.
 * @param {number} id - ID del producto a eliminar.
 * @returns {Array[]} Nueva lista sin el producto eliminado.
 * @throws {Error} Si el ID no existe en la lista.
 */
  function bajaProducto(listaProductos, id) {
    const existe = listaProductos.some((p) => p[PR_ID] === id);
      if (!existe) {
        throw new Error("Producto no encontrado para dar de baja");
      }

      return listaProductos.filter((p) => p[PR_ID] !== id);
  }