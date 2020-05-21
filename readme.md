# Introducción a NodeJS

## Requisitos y entrega


1. Clona el repositorio `github.com/full-stack-neolabs/intro-node.git`
2. Haz un checkout de la rama que se te ha asignado, cuyo nombre comienza por `pair[num de pareja]`

```
git checkout pair[num de pareja]
```

3. Realiza el ejercicio, en este caso practicarás con objetos y clases.

4. Una vez completado lanza los siguientes comandos:

```
git add .
git commit -m "done"
git push

```

- Desde el repositorio [crea un Pull Request](https://help.github.com/articles/creating-a-pull-request/) con el nombre de la pareja en el subject del mensaje y el texto EJERCICIO COMPLETADO.

## Testing

Este ejercicio se ha de completar mediante tests. Durante todo el itinerario de Mean-stack hemos ido utilizado el _testing_ para realizar algunos ejercicios. Para los que no hayan tenido oportunidad de practicar con ellos, se acompaña una breve introducción al testing.

### Qué es el testing

El testing es un proceso por el cual se ejecuta una aplicación para validar y verificar que se cumplen todos los requisitos técnicos, de negocio y de funcionamiento de un software.

El testing es un proceso, no una única actividad. Por tanto, el diseño de tests durante las fases iniciales del desarrollo de un producto puede ayudar a prevenir deficiencias en el código o en el propio diseño del producto.

En este ejercicio, se han creaado todos los test necesarios para obtener la solución, y se han de ejecutar todos ellos para construir el código que cumpla con los requisitos.

Los tests probarán que el código funciona en cualquier situación en las que se prevé que lo haga. También nos servirá para el diseño o la implementación de nuevas funcionalidades, de manera que los cambios que se hagan al código no rompan lo que ya está funcionando.

### Testing con Mocha

![](https://imgur.com/h07x7bq.png)

[Mocha](https://mochajs.org/) es un framework de JavaScript para pruebas que corre en Node.js y en el navegador, facilitando el testing de funciones asíncronas.

### Utilización

Para comenzar a utilizar mocha, se ha de instalar el package como **global package** en el sistema.

```
$ npm install -g mocha
```

Probamos que se ha instalado correctamente:

```
$ mocha --version
6.2.0
```

## Estructura del proyecto:


```

├── test
│   └── test.spec.js
└─ package.json
└─ index.js
```
Trabajaremos con el fichero `index.js`. Escribiremos la implementación de nuestra clase `SortedList`.

La carpeta `test` contiene todos los tests que se ejecutarán con Mocha.

### Ejecución de los tests

Para correr los tests ejecutamos: `npm test`.

```
$ npm test

> introduccion-node@1.0.0 test C:\Users\rglep\Documents\Curso CIFO-La Violeta\Mean Stack 2019\MS-3\Ejercicios\1.introduccion-node\starter-code
> mocha

SortedList
    Constructor
      1) should have items and length properties
    #add(x)
      2) should add a single value to SortedList
      3) should add a third value to SortedList
      4) should add a value while keeping the list sorted
    #get(i)
      5) should return an OutOfBounds exception if there is no element in that position
      6) should return the element in that position
    #max()
      7) should return an EmptySortedList exception if there is no elements in the list
      8) should return the max (highest) value in the list
    #min()
      9) should return an EmptySortedList exception if there are no elements in the list
      10) should return the min (lowest) value in the list
    #sum()
      11) should return the sum of all elements in the list
      12) should return 0 for an empty sorted list
    #avg()
      13) should return an EmptySortedList exception if there are no elements
      14) should return the average of elements in the list

  0 passing (13ms)
  14 failing
```

No te preocupes si todavía no pasas los test, eso llegará!!!

## Instrucciones

La tarea aquí es crear una clase que mantenga una **lista ordenada de números en orden ascendente**
Trabaja en el archivo `index.js` que contiene un esqueleto de la clase `SortedList`.

Los métodos que tiene que tener la clase `SortedList` son los siguientes:

### Iteración 1: constructor()

`new SortedList` debe crear un nuevo objeto de la clase `SortedList`.

El objeto debe tener dos propiedades: `items` y `length`.

- `items` debe ser un Array,
- `length` debe ser el número de elementos del array.

### Iteración 2: add(item)

El método `add(item)` añade `item` al array `items` y lo ordena en orden ascendente.

Esto significa que si el array tiene los elementos: `[2, 5, 7]`, y se añade un `6` el array quedaría: `[2, 5, 6, 7]`.

Aquí debes asegurarte que la propiedad `length` se actualiza cuando se añade un nuevo elemento a la lista.

### Iteración 3: get(pos)

Este método obtiene el valor de la lista en la posición `pos`.

En este caso necesitarás también la propiedad `length` que te proporciona el tamaño de la lista.
_Ejemplo_: Si una instancia de SortedList tiene elementos: [2, 5, 7], cuando se invoca `get(2)` devolverá `7` que es el elemento en esa posición del array. Puedes mirar el test para ver más ejemplos
Además debes asegurarte de lanzar un error con el mensaje _OutOfBounds_ si un usuario intenta obtener un elemento de una posición que no existe (por ejemplo: _si el array tiene 5 elementos y queremos obtener el elemento de la posición 7_).

Para lanzar error puedes seguir la siguiente instrucción:

```js
throw new Error('OutOfBounds');
```

### Iteración 4: max()

El método `max()` devuelve el valor más alto del array.

En el caso de que `SortedList` esté vacío debes lanzar un error con el mensaje "EmptySortedList". Utiliza la siguiente expresión:

```js
throw new Error('EmptySortedList');
```

### Iteración 5: min()

El método `min()` devuelve el menor valor de la lista.

Si la lista está vacía, debes lanzar el error "EmptySortedList", de la misma forma que en el paso anterior.

## Bonus track

### Iteración 6: sum()

El método `sum()` devuelve la suma de todos los valores.
Este caso lo debes resolver sin ayuda, simplemente comprobando los tests.

### Iteration 7: avg()

El método `avg()` devuelve el valor medio del array.

Igual que antes comprueba el test para saber que es lo que tienes que codificar.