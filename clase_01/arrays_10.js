console.log('Ejercicio 10...')

const random_array = [ 1, 4, 7, 10 ]


let nuevo_random_array = random_array.map((item) => {
  return item * 2
})

console.log('Nuevo array: ' + nuevo_random_array)


// Ahora crear un array con los dias de la semana en MAYUSCULAS usando la funcion map