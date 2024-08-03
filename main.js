console.log('array y loops')

// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach

let gameNames = ['Mario','Luigi','Bowser','Toad','Peach','star']

console.log(gameNames)

// console.log('quemado')
// console.log(gameNames[0])
// console.log(gameNames[1])
// console.log(gameNames[2])
// console.log(gameNames[3])
// console.log(gameNames[4])

// 0 1 2 3 4
// valor incial = 0
// cuanto aumenta en cada ciclo + 1
// hasta cuando se debe ejecutar el ciclo hasta que sea menor a 5 o menor o igual a 4
//for( incializacion;condicion;actualizacion)
console.log('ciclo')
for(i =0; i < gameNames.length ; i = i + 1 ){
    // console.log(i)
    console.log(gameNames[i])
}

// 4 3 2 1 0 
console.log('ciclo invertido')
// i = 4.   4 >= 0 si
// i = 3.   3 >= 0 si
// i = 2.   2 >= 0 si
// i = 1.   1 >= 0 si
// i = 0.   0 >= 0 si
// i = -1.   -1 >= 0 no
for(i = gameNames.length - 1; i >= 0 ; i = i - 1 ){
    // console.log(i)
    console.log(gameNames[i])
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// elemento.             1.        2.        3.        4 
let estilosNatacion = ['pecho','espalda','mariposa','crol']
// posiciion.             0.        1.       2.        3
// i = 0    0 <= 19
// i = 1    1 <= 19
// .......
// i = 18    18 <= 19
// i = 19    19 <= 19
// i = 20    20 <= 19 NO se ejecuta
for(i = 0; i <= 19;i = i + 3){
    console.log(numbers[i])
}

console.log('Con ciclo')
let goodGameNames = []

// 
for(i = 0;i < gameNames.length ;i = i + 1 ){

    if(gameNames[i] != 'Bowser'){
        goodGameNames.push(gameNames[i])
    }
}


console.log(goodGameNames)

console.log('Con filtro')

console.log(gameNames.filter( (elmento)=> elmento != 'Bowser' ))
console.log(  numbers.filter( (x)=> x == 7 ) )
console.log(  numbers.filter( (number)=> number != 7 ) )
console.log(  numbers.filter( (item)=> item > 7 ) )
console.log(  numbers.filter( (item)=> item < 15 ) )
console.log('FILTER')
console.log(numbers)
console.log(  numbers.filter( (item)=> item > 7 && item < 15  ) )
console.log(numbers)

let newNumbers = []
for(i= 0;i < numbers.length ; i++){
    newNumbers.push(numbers[i] * 4)
}
console.log('CICLO')
console.log(numbers)
console.log(newNumbers)
console.log(numbers)

console.log('MAP')
let mapNumbers = numbers.map( number => number  * 4)
console.log(mapNumbers)
console.log(numbers)
console.log( gameNames.map( gameName => gameName + 's') )


gameNames.forEach((item)=>{
    console.log(item)
})


console.log('Do while')

let j = 20
do {
    console.log(j)
    j++
}while( j < 10)