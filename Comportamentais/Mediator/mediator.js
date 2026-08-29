class Form {
  setComponentes({ checkboxTermos, botaoEnviar }) {
    this.checkbox = checkboxTermos;
    this.botao = botaoEnviar;
  }

  notificar(componente, evento) {
    if (componente === this.checkbox && evento === 'change') {
      this.botao.desabilitado = !this.checkbox.marcado;
      console.log(`Botão enviar ${this.botao.desabilitado ? 'DESABILITADO' : 'HABILITADO'}`);
    }
  }
}

class Checkbox {
  constructor(mediador) {
    this.mediador = mediador;
    this.marcado = false;
  }
  toggle() {
    this.marcado = !this.marcado;
    this.mediador.notificar(this, 'change');
  }
}

class Botao {
  constructor() {
    this.desabilitado = true;
  }
}

const form = new FormMediator();
const checkbox = new Checkbox(form);
const botao = new Botao();

form.setComponentes({ checkboxTermos: checkbox, botaoEnviar: botao });

checkbox.toggle(); 
checkbox.toggle(); 