class ExportadorHTML {
  visitarTitulo(no) {
    return `<h1>${no.texto}</h1>`;
  }
  visitarParagrafo(no) {
    return `<p>${no.texto}</p>`;
  }
}

class NoTitulo {
  constructor(texto) {
    this.texto = texto;
  }
  aceitar(visitor) {
    return visitor.visitarTitulo(this);
  }
}

class NoParagrafo {
  constructor(texto) {
    this.texto = texto;
  }
  aceitar(visitor) {
    return visitor.visitarParagrafo(this);
  }
}


const documento = [
  new NoTitulo("Titulo do Artigo"),
  new NoParagrafo("Conteudo")
];

const exportadorHTML = new ExportadorHTML();


const resultado = documento.map(no => no.aceitar(exportadorHTML)).join("");

console.log(resultado);
