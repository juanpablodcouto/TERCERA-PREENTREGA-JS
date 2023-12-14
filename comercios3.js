/*FIND - FILTER - SOME*/


/*JS CREADO PARA LA SECCIÓN DE VENTA DE NOTEBOOKS A LA CUAL SE PODRÁ ACCEDER DESDE EL INDEX (INICIO) EN LA OPCIÓN TECNOLOGÍA. POR EL MOMENTO NO HE PROGRAMADO EL HTML Y CSS DE LAS SECCIONES DE CADA COMERCIO RESPECTIVO, A LOS EFECTOS DE LA SEGUNDA PRE-ENTREGA Y TRATANDO DE NUCLEAR LOS TEMAS VISTOS VOY PRESENTADO ALGO DEL JS QUE TENDRÁN ESTAS SECCIONES*/


const notebooks = [
    {id: 1, notebook: "Samnsung", precio: 700000},
    {id: 2, notebook: "Lenovo", precio: 900000},
    {id: 3, notebook: "Apple", precio: 1500000},
    {id: 4, notebook: "LG", precio: 600000},
]

const buscado = notebooks.find(notebook => notebook.id === 3)
console.log(buscado)

const baratos = notebooks.filter(notebook => notebook.precio < 800000)
console.log(baratos)

const existe = notebooks.some(notebook => notebook.nombre === "Huawei")
console.log(existe)