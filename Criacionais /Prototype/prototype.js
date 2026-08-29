// exemplo:

class pessoa{
    constructor(nome,idade,profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

  clonar(){
    return new pessoa(this.nome,this.idade,this.profissao);
  }

  descrever(){
    return `Nome: ${this.nome}, idade: ${this.idade}, profissao: ${this.profissao}`;
  }


}

let pesoa1 = new pessoa("gustavo", 100, "aposentado");
 
// Em vez de usar "new pessoa" para criar 100 pessoas, apenas clonamos o base!
const pessoa2 = pessoa1.clonar();
const pessoa3 = pessoa1.clonar();



