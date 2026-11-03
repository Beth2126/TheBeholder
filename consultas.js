// Hito 2 · Consultas
//
// Al menos 6 funciones:
//   - filtrar por un criterio
//   - buscar por id
//   - ordenar por dos criterios
//   - comprobar una condición (some o every)
//   - totalizar con reduce
//   - obtener una lista sin repetidos
// Ninguna modifica las listas originales.
// Para leer un dato de una fila, usa tus constantes: libro[L_TITULO], no libro[1].
//
// Hito 3 · Map, Set y funciones avanzadas (también aquí)
//   - un índice Map id → fila que usen tus búsquedas
//   - una agrupación por categoría en un Map
//   - un Set de valores únicos
//   - un closure (por ejemplo, un generador de id)
//   - una función propia que reciba otra función como parámetro
//
// Cada función lleva su comentario JSDoc, por ejemplo:
//
// /**
//  * Devuelve los libros de un género.
//  * @param {Array[]} libros  Lista de libros (cada libro es una fila)
//  * @param {string} genero   Género buscado
//  * @returns {Array[]} Libros de ese género
//  */
// function librosDeGenero(libros, genero) {
//   return libros.filter((libro) => libro[L_GENERO] === genero);
// }



// Realizar 6 funciones como mínimo

// 1. aNumero() — conversión de importes.
//2. Búsqueda por ID.
//3. Filtrado por criterio.
//4. Ordenación por dos criterios.
//5. Comprobación con some o every.
//6. Totalización con reduce.
//7. Lista sin repetidos.
//Además:
//- Una prueba por función como mínimo.
//- Ninguna modificación de los datos originales.
//- JSDoc en todas las funciones.
//- Todas las pruebas superadas.

// Funcion 1: Conversión de importes

/**
 * 
 * @param {string} precio Importe, por ejemplo "24,70" o 33
 * @returns {number} El importe como número (24.7)
 * @throws {Error} "Importe no válido" si está vacío o no es un número
 */
function aNumero(precio){
   const limpio = String(precio).trim().replace(",",".");
   const numero = Number(limpio);
   if(limpio === ""||Number.isNaN(numero)) {
      throw new Error("Importe no válido");
   }
   return numero;

}

// Funcion 2: Búsqueda por ID

/**
 * 
 * @param {number} idProducto Id del producto
 * @returns {Array|undefined} La fila del producto, o undefined si no existe
 */
function buscarPorId(idProducto) {
   return productos.find((producto) => producto[PR_ID]=== idProducto);
}

// Función 3: Filtrado por criterio

/**
 * Devuelve los productos de una categoría.
 * @param {string} categoria  Categoría buscada, por ejemplo "RPG"
 * @returns {Array[]} Productos de esa categoría
 */
function productosPorCategoria(categoria) {
   return productos.filter((producto) => producto[PR_CATEGORIA]=== categoria);
}

// Funcion 4: Oedenación por dos criterios

/**
 * Ordena los productos por categoría y, si empatan, por nombre.
 * Trabaja sobre una copia: no modifica la lista original.
 * @returns {Array[]} Productos ordenados (lista nueva)
 */
function productosOrdenados(){
   return [...productos].sort(
      (a,b) => 
         a[PR_CATEGORIA].localeCompare(b[PR_CATEGORIA], "es")||
         a[PR_NOMBRE].localeCompare(b[PR_NOMBRE], "es")

   );

}

// Función 5: Comprobación con some o every.

/**
 * Comprueba si hay algún producto sin stock.
 * @returns {boolean} true si algún producto tiene stock 0
 */
function hayProductoAgotado() {
  return productos.some((producto) => producto[PR_STOCK] === 0);
}


//Función 6: Totalización con reduce.

/**
 * Calcula el valor total del almacén (precio × stock de cada producto).
 * @returns {number} Total en euros, redondeado a 2 decimales
 */
function valorStock() {
   const total = productos.reduce(
      (suma,producto) => suma + aNumero(producto[PR_PRECIO]) * producto[PR_STOCK],0
   );
   return Number(total.toFixed(2));
   
}

//Función 7 :  Lista sin repetidos.

/**
 * Lista las marcas sin repetir, sin vacías y ordenadas.
 * @returns {string[]} Marcas únicas ordenadas alfabéticamente
 */
function marcasUnicas() {
   const todas = productos.map((producto) => producto[PR_MARCA]);
   const conNombre = todas.filter((marca) => marca !== "");
   const sinRepetir = [...new Set(conNombre)];
   return sinRepetir.sort((a, b) => a.localeCompare(b, "es"));
}

// Hito 3: Map, Set y funciones avanzadas

// Indice Map id → fila que usen tus búsquedas

/**
 * Crea un Map índice de un array basándose en una posición de ID.
 * @param {Array[]} lista  Lista de elementos
 * @param {number} posId   Posición del ID en la fila
 * @returns {Map} Un Map donde la clave es el ID y el valor es la fila
 */
function crearIndice(lista, posId) {
  return new Map(lista.map((fila) => [fila[posId], fila]));
}

const indiceProductos = crearIndice(productos, PR_ID);
const indiceClientes = crearIndice(clientes, CL_ID);

/**
 * Busca un producto por su id usando el índice Map.
 * @param {number} idProducto Id del producto
 * @sparam {Array|undefined} La fila del producto o undefined
 */
function buscarPorId(idProducto) {
  return indiceProductos.get(idProducto);
}

// Agrupar en un Map

/**
 * Agrupa los productos por su categoría en un Map.
 * @returns {Map<string, Array[]>} Map donde la clave es la categoría y el valor es un array con los productos de esa categoría
 */
function agruparProductosPorCategoria() {
  return productos.reduce((mapa, producto) => {
    const categoria = producto[PR_CATEGORIA];
    if (!mapa.has(categoria)) {
      mapa.set(categoria, []);
    }
    mapa.get(categoria).push(producto);
    return mapa;
  }, new Map());
}

//  Valores únicos con Set.

/**
 * Devuelve un Set con las categorías únicas de los productos.
 * @returns {Set<string>} Set de categorías sin repetir
 */
function categoriasUnicas() {
  return new Set(productos.map((producto) => producto[PR_CATEGORIA]));
}

// Un closure Una función que cree un generador de ids: recuerda el último y da el siguiente cada vez que se llama

/**
 * Crea un generador de IDs secuenciales (closure).
 * @param {number} ultimo  El último ID existente
 * @returns {Function} Una función que, al llamarla, devuelve el siguiente ID incrementado
 */
function crearGeneradorId(ultimo) {
  let actual = ultimo;
  return () => {
    actual++;
    return actual;
  };
}

// Una función de orden superior

/**
 * Función de orden superior que filtra una lista aplicando una condición (callback).
 * @param {Array[]} lista     Lista a filtrar
 * @param {Function} condicion  Función que evalúa cada fila
 * @returns {Array[]} Lista filtrada
 */
function filtrarPor(lista, condicion) {
  return lista.filter(condicion);
}

