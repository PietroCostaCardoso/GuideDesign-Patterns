const Autenticacao = (proximo) => (requisicao) => {
  if (!requisicao.usuario) {
    console.log("não autenticado");
    return false;
  }
  console.log("autenticado.");
  return proximo ? proximo(requisicao) : true;
};

const VerificacaoPermissao = (proximo) => (requisicao) => {
  if (requisicao.usuario.role !== "admin") {
    console.log("requer admin");
    return false;
  }
  console.log("confirmada");
  return proximo ? proximo(requisicao) : true;
};

const VerificacaoSaldo = (proximo) => (requisicao) => {
  if (requisicao.valor > requisicao.usuario.saldo) {
    console.log("Saldo insuficiente.");
    return false;
  }
  console.log("Saldo suficiente");
  return proximo ? proximo(requisicao) : true;
};

// Montagem da Corrente 
const correnteDeVerificacao = Autenticacao(
  VerificacaoPermissao(
   VerificacaoSaldo()
  )
);

// Testes
const reqSucesso = {
  usuario: { nome: "Pietro", role: "admin", saldo: 1000000 },
  valor: 10000
};

const reqSemPermissao = {
  usuario: { nome: "Souza", role: "user", saldo: 1000 },
  valor: 200
};

console.log("Sucesso ");
correnteDeVerificacao(reqSucesso);

console.log("Falha n");
correnteDeVerificacao(reqSemPermissao);