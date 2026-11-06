# Fase 1 · Núcleo de datos

**Alumno/a: Betzabeth Ruiz.
**Dominio:** Tienda de barrio de juegos de mesa **The Beholder**

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

## Diario

Una entrada al final de cada sesión: fecha, qué has hecho y qué te ha costado o qué has preguntado.

27/10/2026 · Hecho: readme y estructura básica con ER.
Me ha costado: Entender la estructura.
He preguntado: Cómo es la estructura a Claud y prompt 1
*****
29/10/2026. Hecho: Realize una ER para tener una mejor idea, y realicé los arrays y listado de juegos de mesa.
Me ha costado: Recordar como se pone las relaciones entre entidas pero las obtuve poniendo las cardinalidades.
He preguntado: Chat Gpt que me de un listado  de 15 juegos de mesa, con sus precios, etc.
*****
30/10/2026. Hecho: Cambio de entendidades y sus variables.
Me ha costado: Lentitud al escribir los datos de los arrays.
He preguntado: Cómo realizar en rango, pero se cambiaron las variables, así que esa no la utilizaré.
*****
30/10/2026. Hecho: Descargarme el zip que envíe, para verificar si todo estaba correcto y seguir con el hito 2.
Me ha costado:Nada.
He preguntado: A Claude por que en las listas no se usa tambien mayusculas si es una constante.
*****
01/11/2026. Hecho: Corregir errores del hito 1, escribir la regla en regla.js y estructurar el hito 2
Me ha costado:Enteder algunas líneas de comandos que no se explicaron en clase, y entender la estructura
He preguntado: Cree otro prompt para que me ayude a realizar el trabajo a Claude explicandome y cuestionando mis desiciones.
*****
02/11/2026. Hecho: Terminar las funciones y sus pruebas.
Me ha costado: Hacer las funciones con flecha =>, y las funciones como la de ordenar productos la parte del rango y la de marcasUnicas para comparar.
He preguntado: A Claude explicación de esas funciones.
*****
03/11/2026. Hecho: Redactar el README y verificar las funciones y sus pruebas.
Me ha costado:Terminar de entender las funciones que tenía problemas.
He preguntado:A Claude que me recopile mis dudas y respuestas.
****
03/11/2026 Hecho: Hito 3, índices Map, agrupación, Set de valores únicos, closure generador de IDs y funciones de orden superior
Me ha costado: La lógica interna del .reduce(), para agrupar elementos en un Map, los métodos de map y la sintaxis de las funciones y en las pruebas. 
He preguntado: A Gemini sobre cómo funcionan los métodos has, set y get en los Map y cómo estructurar las pruebas y fucniones.
*****
04/11/2026 Hecho: Regla personal productosDupilcados(), comprobar si un juego ya existe en el stock normalizando el nombre
Me ha costado: Encontrar el error qu era que habñian funciones fuera de los {} y quedaban solas y sintaxis
He preguntado: A Gemini por qué mi código daba error de sintaxis, como hacer la normalización con .replaceAll  para quitar tildes y lógica del bucle con of.
*****
05/11/2026 Hecho: Implementación de las funciones de alta altaProducto() y baja bajaProducto() inmutables, asegurando que devuelven listas nuevas mediante desestructuración y .filter(), validando campos obligatorios y lanzando excepciones con throw.
*Programación del menú interactivo, combinando bucle while, prompt, console.table, confirm y un bloque robusto try-catch con un diccionario de funciones flecha para garantizar que el programa nunca se rompa ante entradas vacías, cancelaciones o errores de formato.
*Incidencia con el depurador, durante las pruebas del menú, un error de tipeo al introducir letras en lugar de un número en pedirNumero 
provocaba un bloqueo del flujo. Se solucionó añadiendo una validación explícita con Number.isNaN() dentro de la función auxiliar y capturándolo con el try-catch.
Me ha costado: Encontrar el error el cual consulté con Gemini, realizar la estructura de menú sin if anidados.
He preguntado: A Gemini por qué mi código daba error de sintaxis, como hacer mejor el menu sin if anidados y desarrollo de las funciones del hito 4.
****
06/11/2026 Hecho: Hacer las pruebas y readme.
Me ha costado: En este punto ninguno, ya que ayer ya había depurado el cçodigo con Gemini.
He preguntado: A Gemini si todo está correcto, sin modificar el código.
****

## Uso de IA

* Herramienta: Claude
* Para qué la usé Para el día 27/10/2026. CONSULTÉ 
* Qué le pedí (resumen): "Tengo que hacer un trabajo para java script, necesito que me ayudes a entender la estructura y qué piden, que en la forma que está redactado, a mi cerebro tdh no le gusta"
* Qué cambié yo y por qué: Preguntar si hago una ER.
* Qué he aprendido: Estructurar hasta lo mas pequeño.

* Herramienta: ChatGPT
* Para qué la usé Para el día 29/10/2026. CONSULTÉ 
* Qué le pedí (resumen): Dame una lista de 15 juegos de mesa con sus precios, edades, jugadores y tipo
* Qué cambié yo y por qué: Cambíe los juegos que ya tenía, solamente por que los conozco.
* Qué he aprendido:Diversidad de juegos de mesa.

* Herramienta: Claude
* Para qué la usé Para el día 30/10/2026. CONSULTÉ 
* Qué le pedí (resumen):Por qué en las listas no se usa tambien mayusculas,si es una constante.
* Qué cambié yo y por qué: Que me diera otra explicación ademas de porque el anexo lo exige.
* Qué he aprendido: Es mejor porner las listas en minúculas porque el anexo lo exige y sobretodo, porque se ve al instante cual es la posición y cual es la fila, porque las CONSTANTES son para valores fijos, una lista puede cambiar.
 
* Herramienta: Claude
* Para qué la usé Para el día 1/11/2026. CONSULTÉ Cree otro prompt que se adapte mejor a un trabajo y no ha explicaciones, función productosOrdenados(), valorStock() y marcasUnicas()
* Qué le pedí (resumen):Prompt "Trabajaremos para resolver las actividades que proporciones, respetando sus requisitos y plazos.
En cuanto a las funciones: la función productosOrdenados() realizarla con un if, valorStock() y marcasUnicas() con bucles.
* Qué cambié yo y por qué: nombre de la lista dentro de las funciones, me sugirio solo ponerle p y yo le indique que no, que usemos productos, ya que es mejor ser explicito y claros.
* Qué he aprendido: Ser explicito y claro que debo afianzar mi conocimiento y práctica en rangos, funciones flecha => (siempre y cuando no tenga muchas líneas), la  importancia del null.

* Herramienta: Claude
* Para qué la usé Para el día 2/11/2026. CONSULTÉ a Claude función flecha frente a
function, find frente a filter y findIndex, shortcut en JSDoc para @trows, reduce, y toFixed frente a Math.round
* Qué le pedí (resumen): Que me vuelva a explicar paso por paso la función flecha =>, que diferencia hay entre.find, .filter y .findIndex().
Si existe un atajo para escribir los @trows como en JavaDoc y porque Claude uso fue Math.round, cuando existe el .toFixed() y .reduce.
* Qué cambié yo y por qué: La función valorStock() use fue .toFixed()
* Qué he aprendido: métodos nuevos como .reduce y preferencia de código.

* Herramienta: Claude
* Para qué la usé Para el día 3/11/2026. CONSULTÉ a Claude recopilación de mis dudas.
* Qué le pedí (resumen): Que me resumiera la trazabilidad que use con ella para el hito 2.
* Qué cambié yo y por qué: Nada.
* Qué he aprendido: Necesito seguir prácticando las funciones y su lógica y recordar la sintaxis.

* Herramienta: Gemini
* Para qué la usé: Para el día 03/11/2026. CONSULTÉ el desarrollo del Hito 3 (Maps, Sets, closures y funciones de orden superior), la validación de pruebas.
* Qué le pedí (resumen): "Dame todos los pasos del hito 3 exactamente como los pide mi profe, vamos a que en cada paso me hagas preguntas para ver si llego a la solución..."
* Qué cambié yo y por qué: Adapté los nombres y estructuras para que encajaran perfectamente con mi dominio de la tienda de juegos de mesa *The Beholder*
* Qué he aprendido: A entender el funcionamiento de los Map para índices rápidos y agrupación y sus métodos el uso de Set para eliminar duplicados de forma limpia, y la importancia de estructurar las pruebas, aun me falta afianzar en la sintaxis y estructuras de las funciones y pruebas.

* Herramienta: Gemini
*Para qué la usé:Para el día 04/112026 Consulté cómo desarrollar y depurar la regla personal de duplicados y estructurar su código y pruebas.
*Qué le pedí (resumen):"Necesito que me ayudes a estructurar paso a paso la regla de productosDuplicados y sus pruebas para mi tienda *The Beholder*, desglosándolo de forma clara porque con la redacción oficial me lio."
*Qué cambié yo y por qué:Adaptar las llaves, corregir errores de sintaxis y asegurar que no se saliera de los condicionales clásicos (if) sin ternarios --> cambiar los ? que me daba para los códigos, porque no entiendo aún esa sintaxis y me siento cómoda con if, ya que lo añadía en la funtion normalizarTexto
*Qué he aprendido:* Aún me falta entender la sintáxis con los bucles for-of, concatenar métodos.

* Herramienta: Gemini
* Para qué la usé: Para el día 05/11/2026 y 06/11/2026. CONSULTÉ el desarrollo del Hito 4 (Maps, Sets, closures y funciones de orden superior), la validación de pruebas.
* Qué le pedí (resumen): "Dame todos los pasos del hito 4 exactamente como los pide mi profe, vamos a que en cada paso me hagas preguntas para ver si llego a la solución", apoyo en las estructuras inmutables y estructura de bucles en el menú sin usar if anidados.Tambien depuración del codigo sin cambiar mi código y hacer pruebas.
* Qué cambié yo y por qué: Cambié los if anidados que insistía en darmelos.
* Qué he aprendido: A entender el funcionamiento de un menú interactivo, debo seguir avanzando con la lógica y sintáxis.

## Git (opcional)

https://github.com/Beth2126/TheBeholder

