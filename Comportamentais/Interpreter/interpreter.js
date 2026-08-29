class Contexto {
  constructor(dados) {
    this.dados = dados;
  }
}

class ExpressaoSQL {
  interpretar(contexto) {
    throw new Error("O método interpretar deve ser implementado");
  }
}

class Select extends ExpressaoSQL {
  constructor(campo) {
    super();
    this.campo = campo; 
  }

  interpretar(contexto) {
    return contexto.dados.map(registro => ({
      [this.campo]: registro[this.campo]
    }));
  }
}

class Where extends ExpressaoSQL {
  constructor(expressaoSelect, campoFiltro, valorFiltro) {
    super();
    this.expressaoSelect = expressaoSelect;
    this.campoFiltro = campoFiltro;
    this.valorFiltro = valorFiltro;
  }

  interpretar(contexto) {
    const dadosFiltrados = contexto.dados.filter(
      registro => registro[this.campoFiltro] === this.valorFiltro
    );

    
    const novoContexto = new Contexto(dadosFiltrados);
    return this.expressaoSelect.interpretar(novoContexto);
  }
}



const usuarios = [
  { id: 1, nome: "Ana", idade: 25, cargo: "dev" },
  { id: 2, nome: "Cardoso", idade: 30, cargo: "designer" },
  { id: 3, nome: "Beatriz", idade: 25, cargo: "DevOps" }
];

const contexto = new Contexto(usuarios);

const consulta1 = new Select("nome");
console.log("Consulta 1");
console.log(consulta1.interpretar(contexto));

console.log("Consulta 2");
console.log(consulta2.interpretar(contexto));