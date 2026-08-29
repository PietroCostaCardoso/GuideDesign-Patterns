class TipoArvore {
  constructor(nome, cor, textura) {
    this.nome = nome;
    this.cor = cor;
    this.textura = textura; 
  }

  desenhar(x, y) {
    console.log(`Desenhando '${this.nome}' (${this.cor}) na posição X:${x}, Y:${y}`);
  }
}

class FabricaDeArvores {
  static tiposArvores = {};

  static obterTipoArvore(nome, cor, textura) {
    const chave = `${nome}_${cor}_${textura}`;

    if (!FabricaDeArvores.tiposArvores[chave]) {
      FabricaDeArvores.tiposArvores[chave] = new TipoArvore(nome, cor, textura);
      console.log(`[Fabrica] Criando novo TipoArvore pesado na memória: ${chave}`);
    }

    return FabricaDeArvores.tiposArvores[chave];
  }
}

class Arvore {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo; 
  }

  desenhar() {
    this.tipo.desenhar(this.x, this.y);
  }
}

//Uso 

class Floresta {
  constructor() {
    this.arvores = [];
  }

  plantarArvore(x, y, nome, cor, textura) {
    const tipo = FabricaDeArvores.obterTipoArvore(nome, cor, textura);
    const arvore = new Arvore(x, y, tipo);
    this.arvores.push(arvore);
  }

  desenhar() {
    this.arvores.forEach(arvore => arvore.desenhar());
  }
}

const floresta = new Floresta();

floresta.plantarArvore(11, 20, "Ipê", "Amarelo", "textura_ipe.png");
floresta.plantarArvore(77, 25, "Ipê", "Amarelo", "textura_ipe.png");
floresta.plantarArvore(88, 50, "Ipê", "Amarelo", "textura_ipe.png");


floresta.plantarArvore(100, 200, "Carvalho", "Verde", "textura_carvalho.png");

console.log("Renderizando a floresta ");
floresta.desenhar();