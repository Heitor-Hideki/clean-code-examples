function andarDeCarro () {
  Carro.entrar()
  Carro.ligar();
  Carro.dirigir();
  Carro.estacionar();
}

function fazerFeira() {
  andarDeCarro();
  Ingredientes.procurar();
  Ingredientes.comprar();

  return Ingredientes;
}

function prepararMacarrão (macarrão) {
  Água.ferver();
  Água.salgar();
  Água.inserir(macarrão);
  macarrão.escorrer();
}

function prepararMolhoBolonhesa(ingredientes) {
  ingredientes.alho.descascar();
  ingredientes.alho.cortar();

  if(preguiça) {
    ingredientes.molhoDeTomate.comprar();
  } else {
    ingredientes.tomate.ferver();
    ingredientes.tomate.descascar();
    Liquidificardor.colocar(Tomate);
    Liquidificardor.ligar();
  }
}

function prepararCarne(carne, óleo) {
  Cacarnerne.temperar();
  
  Panela.colocar(óleo);
  óleo.ferver();
  Panela.colocar(carne);
}

function servirMacarronada() {
  for (const Prato of Mesa) {
    Prato.servir(Macarronada)
  }
}

function fazerMacarronada(ingredientes) {
  prepararMacarrão(ingredientes.macarrão);
  prepararMolhoBolonhesa(ingredientes);
  prepararCarne(ingredientes.carne, ingredientes.óleo);
  Travessa.colocar(Macarrão, MolhoBolonhesa, Carne);
  return macarronada;
}

function fazerJanta() {
  fazerFeira();
  fazerMacarronada();
  servirMacarronada();
}