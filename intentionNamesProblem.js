function duplicado (numeros) {
  let a = numeros[0];
  let b = numeros[0];

  while (true) {
    a = numeros[a]
    b = numeros[numeros[b]]

    if(a === b){
      break;
    }
  }

  b = numeros[0];

  while (a !== b){
    a = numeros[a]
    console.log('ptr1', a)
    b = numeros[b]
    console.log('ptr2', b)
  }

  return a
}

const numeros = [];
for (let i = 1; i <= 6; i++) {
  numeros.push(i);
}
numeros.push(4);

console.log(duplicado(numeros))