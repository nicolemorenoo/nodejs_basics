const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const size_meses = meses.length  // Tamaño del array de meses
const size_dias = dias.length  // Tamaño del array de dias

for (let m = 0; m < size_meses; m=m+1) {
  console.log( meses[m].toUpperCase() )
}
