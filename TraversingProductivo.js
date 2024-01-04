    //con estos métodos podemos hacer Traversig de una forma más efecaz
    //ESTOS METODOS DEVUELVEN HTML COLLECTION

    //CARACTERISTICAS DE HTML COLLECTION
    //SOLO CONTIENE ELEMENTOS HTML
    //DINÁMICO(SE ACTUAILIZA SOLO)
    //ESTÁ INDEXADO POR INDICES(PODEMOS ACCEDER A UNA POSICIÓN ESPECÍFICA)
    //NO ES DIRECTAMENTE ITERABLE, AUNQUE LO PUEDE SER SI SE CONVIERTE EN UN ARRAY

    
    //ESTOS DOS METODOS SOLO TIENEN ALCANCE LOCAL
    //SOLO SE PUEDE USAR UTILIZAMDO LA EQTIQUETA DOCUMENT.
    obtenerPorId = document.getElementById("contenedor");
    console.log(obtenerPorId);
    // devuelve el primer elemento que coincida con el ID especificado. No devuelve una lista de elemento
    //por eso es element y no elements

    obtenerPorNombre = document.getElementsByName("input1");
    console.log(obtenerPorNombre)
    //devuelve una HTML colection lista con todosos lo s elementos que contengan cierta etiqueta name


    //ESTOS DOS TIENEN TANTO GLOBAL COMO LOCAL
    //PARA USAR EL ALNCANCE LOCAL LO HACEOS MEDIANTE SI ID
    obtenerPorClase = document.getElementsByClassName("boton");
    console.log(obtenerPorClase);
    //Devuelve una HTML collection de todas las clases con ese nombre

    obtenerPorTag = contenedor.getElementsByTagName("h3"); //CONTENEDOR ES EL ID
    console.log(obtenerPorTag);
    //Devuelve una HTML collection de todos los elementos con esa etiqueta