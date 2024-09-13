function separar(itens) {
  let lista = [];
  for (let i = 0; i <= Math.round(itens.length/3); i++) {
    const lista2 = itens.slice(i*3, i*3 + 3);
    lista[i] = lista2;
  }
  console.log(lista)
}

const itens = ['abóbora', 'melancia', 'banana', ' manga', 'mandioca', 'macaxeira', 'ovos'];

separar(itens);