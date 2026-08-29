const criarMemento = (estado) => Object.freeze({ ...estado });

class Imagem {
  constructor() { this.estado = { cor: "Branco", filtro: "Nenhum" }; }
  
  alterar(cor, filtro) { this.estado = { cor, filtro }; }
  salvar() { return criarMemento(this.estado); }
  restaurar(memento) { this.estado = memento; }
}

const historico = [];
const canvas = new Imagem();

canvas.alterar("Azul", "Vintage");
historico.push(canvas.salvar()); 

canvas.alterar("Preto", "PB");

// Ctrl + Z 
canvas.restaurar(historico.pop());

console.log(canvas.estado); 