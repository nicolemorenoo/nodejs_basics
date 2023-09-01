const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']


let meses_maysucula = meses.map((mes) => {
  return mes.toUpperCase()
})

console.log('meses_maysucula: ' + meses_maysucula)
