// Pruebas de tu proyecto. Se ven al abrir pruebas.html.
//
// Funciones que tienes (están en mini-pruebas.js):
//   prueba(nombre, fn)               define una prueba
//   igual(obtenido, esperado)        números, textos, arrays, Map y Set
//   casiIgual(obtenido, esperado)    decimales (2 por defecto)
//   lanzaError(fn, mensaje)          comprueba que se lanza un error con ese mensaje
//
// Ejemplos (cámbialos por los de tu proyecto):
//
// prueba("buscarPorId devuelve el libro 3", () => {
//   igual(buscarPorId(3)[L_TITULO], "Niebla");
// });
//
// prueba("los géneros salen sin repetir", () => {
//   igual(generos(libros), new Set(["poesía", "novela"]));
// });
//
// prueba("prestar falla si el socio no existe", () => {
//   lanzaError(() => prestar(99, 1), "Socio no encontrado");
// });
//
// Necesitas 10 pruebas o más, 2 de ellas de tu regla personal.


// Pruebas Hito 2

prueba("aNumero convierte un precio con coma", () => {
  casiIgual(aNumero("24,70"), 24.7);
});

prueba("aNumero acepta un importe sin decimales", () => {
  igual(aNumero("33"), 33);
});

prueba("aNumero falla con un texto vacío", () => {
  lanzaError(() => aNumero(""), "Importe no válido");
});

prueba("aNumero falla con letras", () => {
  lanzaError(() => aNumero("abc"), "Importe no válido");
});

prueba("buscarPorId devuelve Dixit con el id 3", () => {
  igual(buscarPorId(3)[PR_NOMBRE], "Dixit");
});

prueba("buscarPorId devuelve undefined si el id no existe", () => {
  igual(buscarPorId(99), undefined);
});

prueba("productosDeCategoria devuelve los 4 juegos de RPG", () => {
  igual(productosPorCategoria("RPG").length, 4);
});

prueba("productosOrdenados empieza por Dixit", () => {
  igual(productosOrdenados()[0][PR_NOMBRE], "Dixit");
});

prueba("productosOrdenados no modifica la lista original", () => {
  productosOrdenados();
  igual(productos[0][PR_ID], 1);
});

prueba("hayProductoAgotado detecta el stock 0", () => {
  igual(hayProductoAgotado(), true);
});

prueba("valorStock suma precio × stock", () => {
  casiIgual(valorStock(), 9800.78);
});

prueba("marcasUnicas no repite ni incluye vacias", () => {
  const marcas = marcasUnicas();
  igual(marcas.length, 9);
  igual(marcas.includes(""), false);
});

// Pruebas Hito 3

prueba("categoriasUnicas devuelve un Set sin repetir", () => {
  igual(categoriasUnicas(), new Set(["Cartas", "Estrategia", "RPG"]));
});

prueba("crearGeneradorId incrementa correctamente", () => {
  const siguiente = crearGeneradorId(14);
  igual(siguiente(), 15);
  igual(siguiente(), 16);
});

// PRUEBAS DE LA REGLA PERSONAL 

// PRUEBAS DE LA REGLA PERSONAL (The Beholder)

prueba("productosDuplicados detecta juegos repetidos e ignorando tildes y mayúsculas", () => {
  const listaPrueba = [
    [1, "Catán", "Estrategia", 12, "27,95"],
    [2, "catan ", "Estrategia", 10, "27,95"], // Duplicado de Catán con tilde y espacios
    [3, "Dixit", "Cartas", 15, "29,95"]
  ];

  const resultado = productosDuplicados(listaPrueba);
  igual(resultado.length, 1);
  igual(resultado[0], "catan");
});

prueba("productosDuplicados devuelve array vacío si no hay juegos repetidos", () => {
  const listaPrueba = [
    [1, "Catán", "Estrategia", 12, "27,95"],
    [3, "Dixit", "Cartas", 15, "29,95"]
  ];

  const resultado = productosDuplicados(listaPrueba);
  igual(resultado.length, 0);
});
