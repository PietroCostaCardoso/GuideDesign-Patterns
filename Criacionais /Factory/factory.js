 //exemplo:

class Botao1 {
    render() {
        return "Renderizando btn 1";
    }
}

class Botao2 {
    render() {
        return "Renderizando btn 2";
    }
}

class FabricaDeBotoes {
    criarBotao(tipo) {
        if (tipo === "botão") {
            return new Botao1();
        } else if (tipo === "botão2") {
            return new Botao2();
        }
        throw new Error("Tipo de botão desconhecido.");
    }
}

 let botão = new FabricaDeBotoes().criarBotao("botão");
console.log(botão.render()); 

// como podemos ver , o metodo que decide qual objeto criar ao inves de instaciar diretamente a classe botao1 ou botao2