const freteSedex = (peso) => peso * 10;
const fretePac = (peso) => peso * 5;
const freteGratis = () => 0;

class Carrinho {
  constructor(estrategiaFrete) {
    this.calcularFrete = estrategiaFrete; 
  }
}


const pesoPedido = 2; 

// Cliente escolhe SEDEX
const carrinhoSedex = new Carrinho(freteSedex);
console.log(`Frete R$ ${carrinhoSedex.calcularFrete(pesoPedido)}`); 

// Cliente troca para PAC
const carrinhoPac = new Carrinho(fretePac);
console.log(`Frete R$ ${carrinhoPac.calcularFrete(pesoPedido)}`); 