console.log('desde main js')


let nombre = 'diego'
console.log(nombre)

console.log('Fuerza')
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')

console.log('Ciclo')
// for(inicializacion;condicion;actualizacion)
for(i = 1; i <= 5 ;i++){
    console.log(i)
}

// i = i + 1 ====> i++
// i = i - 1 ====> i--


console.log('Ciclo de 20 a 15 ')
// for(inicializacion;condicion;actualizacion)
// i = 20.  20 >= 15
// i = 19.  19 >= 15
// i = 18.  18 >= 15
// i = 17.  17 >= 15
// i = 16.  16 >= 15
// i = 15.  15 >= 15
// i = 14.  14 >= 15 aqui no imprime
for(i = 20; i >= 15 ;i--){
    console.log(i)
}


console.log('Ciclo de 30 a 50 de 5 en 5 ')
for(i = 30; i <= 50 ;i = i + 5){
    console.log(i)
}


let nombres = ['diego','johana','santiago']

const alumnos = ['facundo','valentina','jaime']

// length.        1.    2.     3        4        5
let frutas = ['fresa','piña','mamon', 'limon']
// position.      0.     1.    2.        3.       4
console.log(frutas)
console.log('Fuerza')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')


console.log('Ciclo')
for(i=0; i < frutas.length ;i++){
    console.log(frutas[i] + 's')
}


console.log('Ciclo invertido')
for(i=frutas.length - 1; i >= 0 ;i--){
    console.log(frutas[i] + 's')
}