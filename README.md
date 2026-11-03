#Vas a programar la lógica de un gestor que funciona en la consola del navegador: datos guardados en listas,
funciones que los consultan, una regla que solo tienes tú y un menú con ventanas prompt. Todavía no hay
página web: eso llegará en la Fase 3. Este código te acompañará hasta febrero, así que merece la pena
entenderlo bien.
Con este trabajo se evalúa lo visto hasta ahora: sintaxis, arrays, conjuntos (Set), mapas (Map) y funciones.
Cada registro de tus datos es un array al que llamamos «fila», y unas constantes dicen qué hay en cada
posición. No se usan objetos { }: los veremos en la Fase 2.

# Fase 1 · Núcleo de datos

**Alumno/a: Betzabeth Ruiz.
Dominio:** Tienda de barrio de juegos de mesa **The Beholder**

## Cómo se abre

* `index.html` abre el menú. El programa funciona en la consola del navegador (F12).
* `pruebas.html` muestra el resultado de las pruebas.

Se abren con doble clic o con Live Server. No hay que instalar nada.

## Regla personal

Copia aquí el enunciado de tu ficha:

> Duplicados por nombre normalizado

productosDuplicados() detecta nombres de producto repetidos sin tener en cuenta mayúsculas, tildes ni espacios sobrantes. Devuelve, sin repetir, los nombres normalizados que aparecen más de una vez.

Ejemplo: «Plátano» y «platano » → ["platano"].

Pista: Puedes quitar las tildes sustituyendo á, é, í, ó y ú una a una con replaceAll.

Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

## Por qué uso Map y Set

Explícalo en 2 o 3 líneas, con tus palabras (Hito 3).
Use Map porque es una manera mas eficiente y rápida de crear índices en este caso, y buscar una posición es específica sin recorrer todo el array y usar comparaciones para llegar al resultado, usando el get en vez de find y tambieb para agrupar datos de un espacio en el array.
Y set recoore el array y elimina duplicados dejando nada mas los valores únicos.


