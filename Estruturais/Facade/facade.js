class SistemaPagamento {
  processarPagamento(valor) {
    console.log(`R$ ${valor} debitado.`);
    return true;
  }
}

class Estoque {
  reservarItem(produtoId) {
    console.log(`${produtoId} reservado.`);
  }
}

class Logistica {
  agendarEntrega(produtoId, endereco) {
    console.log(`${produtoId} agendado para ${endereco}`);
  }
}

class LojaFacade {
  constructor() {
    this.pagamento = new SistemaPagamento();
    this.estoque = new Estoque();
    this.logistica = new Logistica();
  }

  comprarProduto(produtoId, valor, endereco) {
    console.log("Iniciando ");
    
    const pago = this.pagamento.processarPagamento(valor);
    if (pago) {
      this.estoque.reservarItem(produtoId);
      this.logistica.agendarEntrega(produtoId, endereco);
      console.log("Compra concluída ");
    }
  }
}


const loja = new LojaFacade();
loja.comprarProduto("123", 150.00, "Rua do pastel, 123");