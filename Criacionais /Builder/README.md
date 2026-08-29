## Design Patterns: builder
  Ele Separa a construção passo a passo. É ideal para resolver o problema com excesso de parâmetros ou quando a criação de um objeto exige muitas etapas de configuração.

tipo um pedido de um lanche customizado

Imagine que você entra em uma lanchonete para montar um hambúrguer personalizado.

    Sem o Builder: O atendente pede para você passar todos os ingredientes de uma só vez na chamada da função: new Hamburguer("pão ", "carne", "queijo ", null, null, "bacon", "maionese", null, true). Fica confuso lembrar a ordem e o significado de cada null.

    Com o Builder: Você recebe uma ficha onde marca passo a passo o que deseja. Você chama apenas os métodos dos ingredientes que quer:

        .adicionarPao("australiano")

        .adicionarCarne("200g")

        .adicionarQueijo("cheddar")

        .adicionarBacon()

        .build() ( lanche é montado e entregue pronto) 
