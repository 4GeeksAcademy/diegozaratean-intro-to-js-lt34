console.log('ternary')


// Que me indique si debo pagar 10% o 20%  de impuesto , si gano menos de 1000 de pago 10 y si gano 1000 o mas debo pagar 20%

// PSEUDOCODIGO
// defnir una vairable salario y asignarle el salario actual
// si salario es mayor o igual a 1000 imprimir 'Debes pagar 20% de impuestos'
// condicional que valide tu salario
// si salario es menor a 1000 imprimir 'Debes pagar 10% de impuestos'
let salario = 500

// let mensaje = ''
// if ( salario <= 1000){
//     mensaje = 'Debes pagar 10% de impuestos'
// }else{
//     mensaje = 'Debes pagar 20% de impuestos'
// }

// Ternary operator
// if(condicion){
    //. si es tru que hago
    //}else{
        //  si es false que hago
        //}
// ( condicion) ? si es tru que hago : si es false que hago
let mensaje =  ( salario <= 1000) ?'10%' : '20%'
//'Debes pagar 10% de impuestos'
// document.querySelector('#content').innerHTML = `Debes pagar ${mensaje} de impuestos`  
// document.querySelector('#content').innerHTML = 'Debes pagar ' + mensaje + ' de impuestos'

document.querySelector('#content').insertAdjacentHTML(
    'afterbegin',
    `Debes pagar ${mensaje} de impuestos` ,
  );
console.log(mensaje)

// Que me indique basado en mi edad si puedo ingresar en un bar
let edad = 2
let verificarEdad = ( edad > 18) ? 'Puedes ingresar' : 'Tienes que esperar'
console.log(verificarEdad)


console.log((  true) ? 'sonrie es un dia genial' : 'igual sonrie')





