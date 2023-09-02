console.log('Ejercicio 08...')

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const size_meses = meses.length  // Tamaño del array de meses
const size_dias = dias.length  // Tamaño del array de dias

let meses_maysucula = []  // Array vacio

// Haciendo log el array vacio
console.log('meses_maysucula: ' + meses_maysucula)

for (let m = 0; m < size_meses; m=m+1) {
  // con la funcion push() se inserta un item al array
  meses_maysucula.push( meses[m].toUpperCase() )
}

// Haciendo log el array con valores insertados
console.log('meses_maysucula: ' + meses_maysucula)




// Ahora crea un array vacio y rellenalo con los dias de la semana en MAYUSCULAS