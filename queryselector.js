//Los query selector es otra gorma de Traversting que nos devuelve un


//EL QUERY SELECTOR BASICO = 
//Devuelve el primer elemento que coincide con el selector CSS especificado, 

//Se puede =

//Buscar por clase
const BuscarPorClase = document.querySelector('.div1');
console.log(BuscarPorClase);

//Buscar por id
const BuscarPorId = document.querySelector('#input01');
console.log(BuscarPorId);

//Buscar por tag o etiqueta
const BuscarPorTag   = document.querySelector('h3');
console.log(BuscarPorTag);


//Buscar por number name...
const buscarPorName = document.querySelector('[name= "input1"]')
console.log(buscarPorName);

//EL QUERY SELECTOR ALL NOS DEVUELVE UNA NODE LIST CON TODOS LOS ELEMENTOS QUE COINCIDAN 
//CARACTERISTICAS DE LOS NODE LIST

//HAY INDEXACIÓN
//CONTIENEN TDO TIO DE LEEMENTOS, NO SOLO HMTL (CONTIENEE TEXTOS EN BLANCO Y COMENTARIOS)
//ES DINÁMICO Y SE ACTIALIZA
//PODEMOS UTILIZAR ITERAR Y UTILIZAR METODOS (COMO FOREACH)



const BuscarPorTagTodos   = document.querySelectorAll('h3');
console.log(BuscarPorTagTodos);

