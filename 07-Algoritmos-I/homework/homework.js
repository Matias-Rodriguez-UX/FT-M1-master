'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [2,3,5,7]
  let fact =[]
  let res = 0
  let cont = 1
    for(let i = 0; i<arr.length; i++){
      res = num % arr[i]
      if(res === 0){
        fact.push(arr[i])
        num = num/arr[i]
        i=-1
      }
      cont ++
      if(!fact && cont === arr.lenght){
        fact.push(num)
      }
    }
  if (cont >= arr.length && num>7){
    fact.push(num)
  }
  fact.unshift(1)
  return fact
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0 
  let cont = 0
  let largo = array.length -1
  do{
    cont = 0
    for (let i = 0 ; i < largo; i++) {
      if (array[i]>array[i+1]){
        aux = array[i]
        array[i] = array[i+1]
        array[i+1]= aux
        cont ++
      }
    } 
  }while(cont>0)
  return array

}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //[1,3,0,4,2]
  let j
  let clave
  let k
  for (let i = 0; i< array.length-1; i++){
    j = i+1 // j=1/j=2//j3/j=4
    clave = array[j]//clave=3//clave =0//clave=4//clave=2
    k=j //k=3/k=4
    for (let d = i; d>=0; d--){//d=0//d=1,0//d=2//d=3
      if(array[d]>clave){//[0,1,3,4,2] ronde d=3 entra 
        array[k]= array[d]//[1,3,3,4,2],[1,1,3,4,2]//[0,1,3,4,4]
        array[d] = clave // entra la posicion 1(3) se asigna 0[1,0,3,4,2],[1,1,3,4,2] cambia por[1,1,3,4,2],[0,1,3,4,2]//[0,1,3,2,4]
        k--// no entra k=3
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let newArr = []
  let min = array[0]
  let pos = 0
  let largo = array.length
  while(newArr.length<largo){
    for(let i = 0; i < largo; i++){
      if (array[i]<min){
        min = array[i]
        pos = i
      }
    }
    newArr[largo-array.length] = min
    for( let j = pos; j< array.length-1; j++){
      array[j]=array[j+1]
    }
    array.pop()
    min= array[0]
    pos=0
  }
return newArr
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
