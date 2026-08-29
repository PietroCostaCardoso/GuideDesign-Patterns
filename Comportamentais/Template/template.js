class Autenticador {
  login() {
    this.obterCredenciais();
    this.validarCredenciais(); 
    this.gerarSessao();
  }

  obterCredenciais() {
    console.log("Recebendo dados ");
  }

  validarCredenciais() {
    throw new Error("erro");
  }

  gerarSessao() {
    console.log("logado com sucesso.");
  }
}

class AuthEmail extends Autenticador {
  validarCredenciais() {
    console.log("Verificando");
  }
}

// Login com Google (
class AuthGoogle extends Autenticador {
  validarCredenciais() {
    console.log("Validando");
  }
}


const loginSenha = new AuthEmail();
loginSenha.login();

const loginGoogle = new AuthGoogle();
loginGoogle.login();