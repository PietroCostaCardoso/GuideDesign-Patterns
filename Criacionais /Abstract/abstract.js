// exemplo:

// Interfaces
class Animal {
    atacar() { throw new Error(""); }
}

class Territorio {
descrever() { throw new Error(""); }
}

// família 1
class Leao extends Animal {
    atacar() { return "O leão morde com força!"; }
}
class Savana extends Territorio {
    descrever() { return "Savana bom territorio"; }
}

// Família 2
class UrsoPolar extends Animal {
    atacar() { return "O urso polar ataca "; }
}
class Tundra extends Territorio {
    descrever() { return "Tundra congelada."; }
}


class EcossistemaFactory {
    criarAnimal() {}
    criarTerritorio() {}
}

// Define a Família
class FabricaSavana extends EcossistemaFactory {
    criarAnimal() { return new Leao(); }
    criarTerritorio() { return new Savana(); }
}

class FabricaPoloNorte extends EcossistemaFactory {
    criarAnimal() { return new UrsoPolar(); }
    criarTerritorio() { return new Tundra(); }
}



function simularAmbiente(fabrica) {
    const animal = fabrica.criarAnimal();
    const territorio = fabrica.criarTerritorio();

    console.log(territorio.descrever());
    console.log(animal.atacar());
}


simularAmbiente(new FabricaSavana());

simularAmbiente(new FabricaPoloNorte());
