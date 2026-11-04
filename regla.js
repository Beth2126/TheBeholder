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
 * @param {Array<Array>} listaProductos - Lista principal de productos.
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