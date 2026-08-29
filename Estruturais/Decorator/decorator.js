class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerAcao() {
    console.log(`${this.nome} está aqui.`);
  }
}

class AnimalDecorator extends Animal {
  constructor(animal) {
    super(animal.nome); 
    this.animal = animal; 
  }

 
  fazerAcao() {
    this.animal.fazerAcao();
  }
}


class Nadador extends AnimalDecorator {
  constructor(animal) {
    super(animal); 
  }

  fazerAcao() {
    super.fazerAcao();
    console.log(`${this.nome} está nadando na piscina.`);
  }
}

class Voador extends AnimalDecorator {
  constructor(animal) {
    super(animal); 
  }

  fazerAcao() {
    super.fazerAcao();
    console.log(`${this.nome} está batendo as asas `);
  }
}



console.log("Exemplo 1");
let meuCachorro = new Animal("Rex, o cachorro");
meuCachorro.fazerAcao(); 

console.log("Exemplo 2");
meuCachorro = new Nadador(meuCachorro);  
meuCachorro.fazerAcao();

console.log("Exemplo 3");
meuCachorro = new Voador(meuCachorro); 
meuCachorro.fazerAcao();


