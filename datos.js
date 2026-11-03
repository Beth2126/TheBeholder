// Hito 1 · Datos
//
// Tres listas de registros relacionadas por id. Cada registro es un array (una «fila»)
// y unas constantes dicen qué dato hay en cada posición.
// La lista principal, con 15 registros o más.
// Incluye casos raros: un dato vacío, un precio o una nota con coma, un nombre con tildes.
//
// Ejemplo de la forma (cámbialo por tu dominio):
//
// // Qué guarda cada posición de un libro
// const L_ID = 0, L_TITULO = 1, L_AUTOR = 2, L_GENERO = 3, L_ANIO = 4, L_FIANZA = 5;
//
// const libros = [
//   [1, "Platero y yo", "Juan Ramón Jiménez", "poesía", 1914, "2,50"],
//   [2, "La colmena", "Camilo José Cela", "novela", 1951, "3"],
//   [3, "Niebla", "", "novela", 1914, "2,50"],
//   ...
// ];
//
// // Un préstamo guarda el id del libro y el id del socio: así se relacionan las listas
// const P_ID = 0, P_LIBRO = 1, P_SOCIO = 2, P_DIA = 3, P_DEVUELTO = 4;
//
// const prestamos = [
//   [1, 2, 1, 3, false],   // el socio 1 tiene el libro 2 desde el día 3
//   ...
// ];
//
// Hecho cuando console.table muestra las tres listas en la consola sin errores.

// The Beholder
// Dominios:
// Productos (PR), Clientes(CL), Pedidos(PE)
// Por buena práctica y para diferenciar de manera unívoca cada elemnto del array, se coloca la inicial de sudominio

// Productos (PR): 
const PR_ID =0, PR_NOMBRE=1, PR_MARCA=2, PR_CATEGORIA=3, PR_STOCK=4, PR_PRECIO=5; 
const productos = [
    [1, "Sushi Go Party", "Devir", "Cartas", 12, "24,70"],
    [2, "Carcassonne", "Devir", "Estrategia", 20, "27,95"],
    [3, "Dixit", "Libellud", "Cartas", 15, "29,95"],
    [4, "7 Wonders", "Repos Production", "Estrategia", 10, "40,95"],
    [5, "Virus", "Tranjis Games", "Cartas", 30, "13,95"],
    [6, "HeroQuest", "Avalon Hill/Hasbro", "RPG", 25, "99,95"],
    [7, "Azul", "Next Moves Games", "Estrategia", 27, "35,00"],
    [8, "Catán", "Devir", "Estrategia", 12, "27,95"],
    [9, "7 Wonders Duel", "Repos Production", "Estrategia", 22, "33"],
    [10, "Pelusas", "Mercurio", "Cartas", 0, "10,95"],
    [11, "Saboteur", "Mercurio", "Estrategia", 31, "17,99"],
    [12, "Cthulhu: Death May Die", "CMON", "RPG", 7, "50,47"],
    [13, "Gloomhaven", "Cephalofair Games", "RPG", 18, "47,95"],
    [14, "Zombicide: Black Plague", "CMON", "RPG", 10, "98,99"],
    [15, "Dobble", "", "Cartas", 20, "19,95"],
];

// Clientes (CL):
const CL_ID =0, CL_NOMBRE =1, CL_TELEFONO=2;
const clientes = [
   [1, "Sofía Calvache", ""],
   [2, "Omar Calvache", "665370047"],
   [3, "Elena Nuñez", "640086607"],
   [4, "Gabriela Ruiz", "640096606"],
   [5, "Lara Pérez", "620086606"],
   [6, "Antonella Debutt", "640086306"],
];

// Pedidos (PE):
const PE_ID=0, PE_CLIENTE=1, PE_PRODUCTO=2, PE_UNIDADES=3, PE_DIA=4, PE_ENTREGADO=5;
const pedidos = [
[1, 1, 1, 2, 15, true],
[2, 2, 3, 2, 12, true],
[3, 1, 4, 2, 19, false],
[4, 5, 12, 2, 28, true],
[5, 1, 2, 2, 1, true],
[6, 6, 7, 2, 4, false],
[7, 2, 5, 2, 17, true],
[8, 4, 1, 2, 28, true],
[9, 6, 10, 2, 22, false],
[10, 2, 2, 2, 11, true],
[11, 4, 5, 2, 8, true],
[12, 6, 2, 2, 30, true],
];