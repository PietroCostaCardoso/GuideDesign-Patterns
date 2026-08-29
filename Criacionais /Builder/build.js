//exemplo:

class Pastel {
    constructor() {
        this.recheios = [];
    }

    descrever() {
        if (this.recheios.length === 0) {
            return "Pastel de vento!";
        }
        return `Pastel de: ${this.recheios.join(", ")}.`;
    }
}


class BancaDePastel {
    constructor() {
        this.pastel = new Pastel();
    }

    comCarne() {
        this.pastel.recheios.push("Carne");
        return this; 
    }

    comQueijo() {
        this.pastel.recheios.push("Queijo");
        return this;
    }

    comCatupiry() {
        this.pastel.recheios.push("Catupiry");
        return this;
    }

    build() {
        return this.pastel;
    }
}



// Cliente 1
const pastelDoWilliam = new PastelDePastel()
    .comCarne()
    .comQueijo()
    .build();

console.log(pastelDoWilliam.descrever()); 


// Cliente 2
const pastelDaAna = new PastelBuilder()
    .comQueijo()
    .comCatupiry()
    .build();

console.log(pastelDaAna.descrever()); 
