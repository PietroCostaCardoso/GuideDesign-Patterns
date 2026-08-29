// Interface
class Processador {
  pagar(valor) {
    console.log(`Pagamento de R$${valor} realizado com sucesso.`);
  }
}

// interface incompatível 
class ServicoPagamentoAntigo {
  fazerTransacao(quantiaEmCentavos) {
    console.log(`Transação antiga processada: ${quantiaEmCentavos} centavos.`);
  }
}

class AdaptadorPagamento extends Processador {
  constructor(servicoAntigo) {
    super();
    this.servicoAntigo = servicoAntigo;
  }

  pagar(valor) {
    const centavos = valor * 100;
    this.servicoAntigo.fazerTransacao(centavos);
  }
}


const processadorAtual = new Processador();
processadorAtual.pagar(50); 

const servicoLegado = new ServicoPagamentoAntigo();
const processadorAdaptado = new AdaptadorPagamento(servicoLegado);

processadorAdaptado.pagar(50); 