// ir ao mercado
    // entrar no carro
    // ligar o carro
    // dirigir o carro
    // estacionar o carro
  // comprar os ingredientes
    // procurar seção
    // escolher marcar
  // preparar macarrão
    // ferver água
    // salgar água
    // colocar macarrão na água
    // escoar macarrão
  // preparar molho
    // preparar alho
      // descascar alho
      // cortar alho
    // preparar molho de tomate 
      // se tiver preguiça
        // comprar molho de tomate
      // se não tiver preguiça
        // ferver tomate
        // descascar tomate
        // bater tomate

function fazerMacarronada() {
  Carro.entrar()
  Carro.ligar();
  Carro.dirigir();
  Carro.estacionar();
  
  Ingredientes.procurar();
  Ingredientes.comprar();

  Água.ferver();
  Água.salgar();
  Água.inserir(Macarrão);
  Macarrão.escorrer();

  Alho.descascar();
  Alho.cortar();

  if(preguiça) {
    MolhoDeTomate.comprar();
  } else {
    Tomate.ferver();
    Tomate.descascar();
    Liquidificardor.colocar(Tomate);
    Liquidificardor.ligar();
  }

  Carne.temperar();
  
  Panela.colocar(Óleo);
  Óleo.ferver();
  Panela.colocar(Carne);

  Travessa.colocar(Macarrão, MolhoBolonhesa, Carne);
  
  for (const Prato of Mesa) {
    Prato.servir(Macarronada)
  }
  
}
