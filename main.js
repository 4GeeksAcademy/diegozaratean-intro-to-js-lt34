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





