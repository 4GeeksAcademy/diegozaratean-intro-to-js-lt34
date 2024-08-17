console.log('ternary')


// funcionalidad que cuando le de click a un boton cambie de color a azul  y el texto a "nuevo titulo"

// PSEUDOCODIGO
// DONE: agregar un boton al html
// DONE:ejecutar una funcion cuando le doy click al boton

// DONE: crear funcion de cambiar titulo

function changeTitle(){
  console.log('changeTitle')
  // DONE:cambiar color titulo
  document.getElementById('title').style.backgroundColor = 'blue'
  // DONE:cambiar texto titulo
  document.getElementById('title').innerText = 'nuevo titulo'
}

// PSEUDOCODIGO
function tituloAleatorio(){
  console.log('tituloAleatorio')
  const ejerciciosGym = ['Press de banca','Elevaciones laterales','Remo al menton','Fondos','Dominadas','sentadillas','abdominales']
  const colores = ['red','blue','yellow','green']
  
  let ejercioAleatorio = ejerciciosGym[ Math.floor(  Math.random() * ejerciciosGym.length  )]
  let colorAleatorio = colores[ Math.floor(  Math.random() * colores.length  )]
  document.getElementById('title').innerHTML = ejercioAleatorio
  document.getElementById('title').style.backgroundColor = colorAleatorio
}





// PSEUDOCODIGO
function tirarDados(){  
  let dado1 = Math.ceil( Math.random() * 6)
  let dado2 = Math.ceil( Math.random() * 6)  
  document.getElementById('dado1').innerText = dado1
  document.getElementById('dado2').innerText = dado2
}
// agregar estilos





// DONE: PSEUDOCODIGO
// DONE:agregar input ancho y alto en html
// DONE: agregar el boton 'redimensionar' al html
// DONE: cuando le doy click al boton redimensionar ejecutar una funcion
//  DONE: crear una funcion redimensionar o cambiar tamaño dados
function redimensionar(){
  console.log('redimensionar')
  //  DONE:leer el input ancho 
  let ancho = document.getElementById('ancho').value
  console.log('ancho',ancho)
  //  DONE: leer el input alto 
  let alto = document.getElementById('alto').value
  console.log('alto',alto)
  // DONE: poder cambiar el tamaño del dado desde js
  document.getElementById('dado1').style.height = `${alto}px`
  document.getElementById('dado1').style.width = ancho + 'px'
  document.getElementById('dado2').style.height = `${alto}px`
  document.getElementById('dado2').style.width = ancho + 'px'
}


// document.getElementById('addevent').addEventListener("click", function (e) {
//   console.log('le diste click a addevent'); // logs the className of my_element
// });

document.getElementById('addevent').onclick = ()=>{
  console.log('le diste click a addevent'); // logs the className of my_element
}


setInterval(tirarDados, 3000);



