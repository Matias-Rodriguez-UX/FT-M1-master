'use strict'

const { size } = require("@11ty/eleventy/src/TemplateCache")
const Eleventy = require("eleventy-plugin-toc")

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  let res = 1
  if (n>0){
    return n * nFactorial(n-1)
  }else {return res}
}
//	si n >1 Entonces
//		Para i = 1 Hasta n-1 Hacer
//			resultado = ant1 + ant2
//			Escribir resultado
//			ant1 = ant2
//			ant2 = resultado
//		FinPara

function nFibonacci(n) {
  if (n >= 2){
    return nFibonacci(n-1) + nFibonacci(n-2)
  } else {
    return n
  }
  // let result = 0
  // let n1=0
  // let n2=1
  // if (n>=2){
  //   for (let i = 2 ; i<=n; i++){
  //     result = n1 + n2
  //     n1 = n2
  //     n2 = result
  //   }
  //   return result
  // }else {
  //   return n
  // }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr = [];
//   class Node {
//     constructor(valor){
//       this.valor = valor;
//       this.next = null;
//     }
//   }

//   class Cola {
//     constructor(){
//       this.first = null;
//       this.last = null;
//       this.large = 0;
//     }
//     enqueue(val){
//       const nodo = new Node(val)
//       if (this.large>0){
//         this.first = nodo;
//         this.last = nodo;
//       }else if(this.large >= 1){
//         this.last = nodo;
//         this.first.next = nodo;
//       }
//       this.large++
//   };
//   dequeue(){
//     if (this.large>0){
//       let current = this.first
//       this.first = this.first.next;
//       return `Eliminado ${current}`
//        }else if(this.large = 0){
//       return "Nada para eliminar"
//     }
//     this.large--
// };
//   size(){
//     return this.large
//   };
//   }
}
Queue.prototype.enqueue = function(valor){
  this.arr.push(valor)
}
Queue.prototype.dequeue = function(){
  return this.arr.shift()
}
Queue.prototype.size = function(){
  return this.arr.length
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
