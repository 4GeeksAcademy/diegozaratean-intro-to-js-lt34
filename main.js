console.log('desde main js')


// let nombre = 'diego'
// console.log(nombre)

// console.log('Fuerza')
// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')

// console.log('Ciclo')
// // for(inicializacion;condicion;actualizacion)
// for(i = 1; i <= 5 ;i++){
//     console.log(i)
// }

// // i = i + 1 ====> i++
// // i = i - 1 ====> i--


// console.log('Ciclo de 20 a 15 ')
// // for(inicializacion;condicion;actualizacion)
// // i = 20.  20 >= 15
// // i = 19.  19 >= 15
// // i = 18.  18 >= 15
// // i = 17.  17 >= 15
// // i = 16.  16 >= 15
// // i = 15.  15 >= 15
// // i = 14.  14 >= 15 aqui no imprime
// for(i = 20; i >= 15 ;i--){
//     console.log(i)
// }


// console.log('Ciclo de 30 a 50 de 5 en 5 ')
// for(i = 30; i <= 50 ;i = i + 5){
//     console.log(i)
// }


// let nombres = ['diego','johana','santiago']

// const alumnos = ['facundo','valentina','jaime']

// // length.        1.    2.     3        4        5
// let frutas = ['fresa','piña','mamon', 'limon']
// // position.      0.     1.    2.        3.       4
// console.log(frutas)
// console.log('Fuerza')
// console.log(frutas[0] + 's')
// console.log(frutas[1] + 's')
// console.log(frutas[2] + 's')


// console.log('Ciclo')
// for(i=0; i < frutas.length ;i++){
//     console.log(frutas[i] + 's')
// }


// console.log('Ciclo invertido')
// for(i=frutas.length - 1; i >= 0 ;i--){
//     console.log(frutas[i] + 's')
// }

// let nombre = 'diego'
// console.log("antes de la funcion",nombre)
// function saludarAlumno(nombre){
//     console.log("dentro de la funcion",nombre)
//     console.log('hola ' + nombre)
// }
// console.log("despues de la funcion",nombre)
// saludarAlumno('Barbara')
// saludarAlumno('Valentina')
// saludarAlumno('Nami')

// function transportar(origen,destino){
//     console.log('saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('llegando a ' + destino)    
// }

// transportar('casa','parque')
// transportar('parque','oficina')
// transportar('oficina','casa')
// transportar()
// transportar()

// Hacer una funcion de suma
// function suma(num1,num2){
//     return num1 + num2
// }
// console.log(suma(2,2)) // 4
// console.log(suma(1,5)) // 6
// console.log(suma(0,3)) // 3
// console.log(suma(10,4)) // 14

// function admitido(edad){
//     if(edad < 18){
//         return 'Tienes que esperar'
//         console.log('despues del return')
//     }else{
//         return 'Puedes pasar'
//     }
// }

// console.log(admitido(15)) // Tienes que esperar
// console.log(admitido(21)) // Puedes pasar

// function calculoImpuesto(ingresos){
//     return ingresos * 0.2
// }

// document.getElementById('resultado').innerText = calculoImpuesto(10000)

// console.log('antes de window onload')

// window.onload = function(){
//     console.log('dentro de window onload')
// }

// console.log('despues de window onload')

// funciones declarativas
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('hola declarativa')
}

// funciones de expresion
const saludoExpresion = function(){
    console.log('hola expresion')
}
saludoExpresion()

// funciones Flecha Arrow
const saludoArrow = () => {
    console.log('hola Arrow')
}
saludoArrow()


/// refactoring


// PSEUDO CODIGO
// desarrollar un generador de excusas de , Quien, Accion, Cuando y Que
// 1. definir los arrays de Quien, Accion, Cuando y Que
// 2. tomar array de Quien y obtener un elemento aleatorio
// 3. tomar array de Accion y obtener un elemento aleatorio
// 4. tomar array de Cuando y obtener un elemento aleatorio
// 5. tomar array de Que y obtener un elemento aleatorio
// 6. contactenar los elmentos aleatorios
// 7. modificar html desde js