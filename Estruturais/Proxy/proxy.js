class ServicoBD {
  buscarUsuario(id) {
    console.log(`Buscando: ${id}`);
    return { id, nome: "Carlos" };
  }
}

function criarProxyBD(servicoReal) {
  const cache = new Map();

  return new Proxy(servicoReal, {
    get(target, prop) {
      if (prop !== "buscarUsuario") return target[prop];

      return (id, usuario) => {
        if (!usuario?.autenticado) return console.log("[negado!");
        if (cache.has(id)) return console.log("Retornando do Cache"), cache.get(id);

        const res = target.buscarUsuario(id);
        cache.set(id, res);
        return res;
      };
    }
  });
}


const bd = criarProxyBD(new ServicoBD());

bd.buscarUsuario(1, { autenticado: false }); // negado!
bd.buscarUsuario(1, { autenticado: true });  //  Buscando 
bd.buscarUsuario(1, { autenticado: true });  // Retornando do Cache