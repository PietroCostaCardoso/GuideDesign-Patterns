//exemplo:
class GerenciadorDeConfiguracao {
    constructor() {
        if (GerenciadorDeConfiguracao.instancia) {
            return GerenciadorDeConfiguracao.instancia;
        }
        
        this.tema = "Escuro";
        this.idioma = "pt-BR";

        GerenciadorDeConfiguracao.instancia = this;
    }

    exibirConfiguracoes() {
        return `Tema: ${this.tema} | Idioma: ${this.idioma}`;
    }
}


const config1 = new GerenciadorDeConfiguracao();
const config2 = new GerenciadorDeConfiguracao();

// Alterar na config1 afeta a config2, pois SÃO O MESMO OBJETO na memória
config1.tema = "Claro";

console.log(config2.exibirConfiguracoes()); 

console.log(config1 === config2); 
//comprova que apontam para a mesma referência