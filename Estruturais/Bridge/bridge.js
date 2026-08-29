// Implementação
class Dispositivo {
  ligar() {}
  desligar() {}
}

class TV extends Dispositivo {
  ligar() {
    console.log("TV ligada.");
  }
  desligar() {
    console.log("TV desligada.");
  }
}

class Radio extends Dispositivo {
  ligar() {
    console.log("Rádio ligado.");
  }
  desligar() {
    console.log("Rádio desligado.");
  }
}

class ControleRemoto {
  constructor(dispositivo) {
    this.dispositivo = dispositivo;
  }

  pressionarBotaoLiga() {
    this.dispositivo.ligar();
  }
}

class ControleAvancado extends ControleRemoto {
  mudo() {
    console.log("Dispositivo mutado.");
  }
}

//Uso 

const tv = new TV();
const controleTV = new ControleRemoto(tv);
controleTV.pressionarBotaoLiga(); // Saída: TV ligada.

const radio = new Radio();
const controleRadioAvancado = new ControleAvancado(radio);
controleRadioAvancado.pressionarBotaoLiga(); 
controleRadioAvancado.mudo();                