class Supermercado {
  getPreco() {}
}

class Produto extends Supermercado {
  constructor(nome, preco) {
    super();
    this.nome = nome;
    this.preco = preco;
  }

  getPreco() {
    return this.preco;
  }
}

class KitPromocional extends Supermercado {
  constructor(nome) {
    super();
    this.nome = nome;
    this.itens = [];
  }

  adicionar(item) {
    this.itens.push(item);
  }


  getPreco() {
    return this.itens.reduce((total, item) => total + item.getPreco(), 0);
  }
}


const arroz = new Produto("Arroz", 25.00);
const feijao = new Produto("Feijão", 8.00);
const oleo = new Produto("Óleo de Soja", 6.00);


const cafe = new Produto("Café", 14.00);
const biscoito = new Produto("Biscoito", 4.00);
const kitCafe = new KitPromocional("Kit");
kitCafe.adicionar(cafe);
kitCafe.adicionar(biscoito);


const cestaBasica = new KitPromocional("Cesta Básica Completa");
cestaBasica.adicionar(arroz);
cestaBasica.adicionar(feijao);
cestaBasica.adicionar(oleo);
cestaBasica.adicionar(kitCafe);

console.log(`Preço do Arroz: R$ ${arroz.getPreco().toFixed(2)}`); 
console.log(`Preço do Kit Café: R$ ${kitCafe.getPreco().toFixed(2)}`); 
console.log(`Preço Total da Cesta Básica: R$ ${cestaBasica.getPreco().toFixed(2)}`); 