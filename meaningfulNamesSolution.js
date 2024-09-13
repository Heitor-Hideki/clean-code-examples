function separarEmSacolas(compras) {
  let caixa = [];
  const itensPorSacola = 3;
  const totalDeSacolas = Math.round(compras.length/3);
  for (let contador = 0; contador <= totalDeSacolas; contador++) {
    const sacola = itens.slice(contador*itensPorSacola, contador*itensPorSacola + itensPorSacola);
    caixa[contador] = sacola;
  }
  console.log(caixa)
}

const itens = ['abóbora', 'melancia', 'banana', ' manga', 'mandioca', 'macaxeira', 'ovos'];

separarEmSacolas(itens);