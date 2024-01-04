//EL traversing es saber NAVEGARr los elemeontos del dom
/* const body = document.body;
console.log(body);

//Nos devuelve todods los nodos (los espacios en blanco se cuentan como nodods tipo texto)
const nodosBody = document.body.childNodes;
console.log(nodosBody);

//sin queremos obtener los nodos de un elemento epecífico como un div
//gracias al child nodes de arriba sabemos que enb la posición 1 tenemos un div
const nodosDiv = document.body.childNodes[1];
console.log(nodosDiv.childNodes)

//PARA DEVOLVER LOS NODOS SIN CONTAR LOS ESPACIOS EN BLANCO
const nodos = document.body.children;
console.log(nodos);

//mas funciones
/*const nodos2 = document.body.firstChild //devuelve el primer hijo (contando espacioes en blanco)
const nodos2 = document.body.lastChild //devuele el ultimo hijo(contando esapcios en blanco)
const nodos2 = document.body.firstElementChild //devuelve el primer hijo (sin contar espacioes en blanco)
const nodos2 = document.body.lastElementChild //devuelve el ultimo hijo (sin contar espacios en blanco */

//comprobar si tiene hijos (contando espacios)
/*  const nodods3 =document.body.children[0]; //estamos comprobando si el primer elemento html(sin contar espacios)tiene nodos dentro
console.log(nodods3.hasChildNodes());     //comprobando si tiene contando espacios


//comprobar si tiene espacios aolo contando elementos html
const nodos4 = document.body.children[0]; 
console.log(nodos4.children > 0); //ya que no hay un metodo para esto usaremos una condicional
// si los hijos sin espacios es mayor que 0 devolverá true sino false */

// SIGUIENTE HERMANO = NEXTELEMENTSIBLIG (NEXTSIBLING CUENTA ESPACIOS)
/* const nodos5 = document.body.children[0];
console.log(nodos5.nextElementSibling) //devuelve el siguiente hermano devolverá el div2

const nodos6 = document.body.children[1];
console.log(nodos5); */

const h1 = document.body.children[0];
console.log(h1);



const div1 = document.body.children[1];
const boton = div1.firstElementChild

boton.addEventListener('click', function(){
    h1.textContent = 'Adios Programadores'
});

boton.addEventListener('click', function(){
    h1.textContent = 'Hola otra vez'
});

//si queremos ir al padre de un elemento

console.log(boton.parentNode);