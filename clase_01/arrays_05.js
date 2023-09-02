console.log('Ejercicio 05...')

const años = [ 2021 ]
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const fechas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] 

const size_años = años.length  // Tamaño del array de meses
const size_meses = meses.length  // Tamaño del array de meses
const size_fechas = fechas.length  // Tamaño del array de fechas


for (let a = 0; a < size_años; a=a+1) {
  for (let m = 0; m < size_meses; m=m+1) {
    console.log( meses[m] + ' de ' + años[a] )
  }
}

// Ahora has un anidamiento para hacer log con las fechas de cada mes
// ejem, "1 de enero, 2 de enero, 3 de enero..."