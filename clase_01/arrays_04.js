console.log('Ejercicio 04...')


const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const fechas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] 
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const size_meses = meses.length  // Tamaño del array de meses
const size_fechas = fechas.length  // Tamaño del array de fechas
const size_dias = dias.length  // Tamaño del array de dias

// for (let i = 0; i < size_meses; i= i +1 ) {
//   console.log(meses[i])
// }

// for (let i = 1; i < size_meses; i= i +6 ) {
//   console.log(meses[i])
// }
// Ahora recorre el array de "dias" usando el loop for, como el ejemplo de arriba

// for (let i = 0; i < 7; i= i+1)  {
//   console.log(dias[i])
//   }

for (let i = 6; i < size_dias ; i=i+1) {
  console.log(dias[i])
}
