const EstadoPausado = {
  clicar: (player) => {
    console.log("Tocando música");
    player.setEstado(EstadoTocando);
  }
};

const EstadoTocando = {
  clicar: (player) => {
    console.log("pausada.");
    player.setEstado(EstadoPausado);
  }
};

class PlayerMusica {
  constructor() {
    this.estado = EstadoPausado;
  }

  setEstado(novoEstado) {
    this.estado = novoEstado;
  }

  pressionarBotao() {
    this.estado.clicar(this);
  }
}

const player = new PlayerMusica();

player.pressionarBotao(); 
player.pressionarBotao(); 