function encontrarNumeroDuplicado (lista) {
  let ponteiro1 = lista[0];
  let ponteiro2 = lista[0];

  while (true) {
    ponteiro1 = lista[ponteiro1]
    ponteiro2 = lista[lista[ponteiro2]]

    if(ponteiro1 === ponteiro2){
      break;
    }
  }

  ponteiro2 = lista[0];

  while (ponteiro1 !== ponteiro2){
    ponteiro1 = lista[ponteiro1]
    console.log('ptr1', ponteiro1)
    ponteiro2 = lista[ponteiro2]
    console.log('ptr2', ponteiro2)
  }

  return ponteiro1
}

const lista = [];
for (let i = 1; i <= 6; i++) {
  lista.push(i);
}
lista.push(4);

console.log(encontrarNumeroDuplicado(lista))