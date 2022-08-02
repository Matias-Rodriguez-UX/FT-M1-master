'use strict'

function BinarioADecimal(num) {
  let dec = 0;
  let largo = (num.length-1)
  for (let i = 0 ; i < num.length ; i++){
    if ( num[i] == 1){
      dec = (Math.pow(2, (largo-i)))  + dec
    } 
  }
return dec
}

function DecimalABinario(num) {
  let resto = 0;
  let arr = [];
  if (num === 0){
    div = "0";
  }
  while (num>0) {
    resto = num%2
    arr.unshift(resto)
    num = Math.floor(num/2)
  }
  let div = arr.join('')
  return div
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}