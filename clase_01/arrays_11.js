console.log('Ejercicio 11...')

const nombres = [ "orlando cuba" ] 

let nombres_sin_espacio = nombres.map((nombre) => {
  return nombre.replace(' ', '_')
})

console.log('Nombres sin espacio: ' + nombres_sin_espacio)


// Ahora crea un nuevo array con el array nombres pero reemplaza las letras 'a' y 'o'  por una 'x'