class Cozinha {
  preparar(prato, mesa) {
    console.log(`"${prato}" para a Mesa ${mesa}.`);
  }

  cancelarPrato(prato, mesa) {
    console.log(`"${prato}" da Mesa ${mesa}!`);
  }
}

class ComandoPedido {
  constructor(cozinha, prato, mesa) {
    this.cozinha = cozinha; 
    this.prato = prato;     
    this.mesa = mesa;       
  }

  executar() {
    this.cozinha.preparar(this.prato, this.mesa);
  }

  desfazer() {
    this.cozinha.cancelarPrato(this.prato, this.mesa);
  }
}

class Garcom {
  constructor() {
    this.historicoComandas = [];
  }

  anotarPedido(comando) {
    this.historicoComandas.push(comando);
    comando.executar();
  }

  cancelarUltimoPedido() {
    if (this.historicoComandas.length > 0) {
      const ultimoComando = this.historicoComandas.pop();
      console.log("Cancelamento");
      ultimoComando.desfazer();
    } else {
      console.log("Nenhum pedido para cancelar.");
    }
  }
}

const cozinha = new Cozinha();
const garcom = new Garcom();

// Criando as comandas 
const pedido1 = new ComandoPedido(cozinha, "Lasanha", 4);
const pedido2 = new ComandoPedido(cozinha, "Pudim", 4);


garcom.anotarPedido(pedido1);

garcom.anotarPedido(pedido2);

garcom.cancelarUltimoPedido();
