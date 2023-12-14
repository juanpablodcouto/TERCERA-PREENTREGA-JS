/*SOME*/


/*JS CREADO PARA LA SECCIÓN DE VENTA DE CECULARES A LA CUAL SE PODRÁ ACCEDER DESDE EL INDEX (INICIO) EN LA OPCIÓN TECNOLOGÍA. POR EL MOMENTO NO HE PROGRAMADO EL HTML Y CSS DE LAS SECCIONES DE CADA COMERCIO RESPECTIVO, A LOS EFECTOS DE LA SEGUNDA PRE-ENTREGA Y TRATANDO DE NUCLEAR LOS TEMAS VISTOS VOY PRESENTADO ALGO DEL JS QUE TENDRÁN ESTAS SECCIONES*/

const productos = [
    {nombre: "Samsung", precio: 200000},
    {nombre: "Motorola", precio: 150000}
];

let precio = Number(prompt("precio"))

console.log(
    productos.some((elemento) => {
        return elemento.precio >precio;
    })
);  


