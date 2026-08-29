## Design Patterns: Composite
Compor objetos em estruturas de árvores para representar hierarquias do tipo "parte-todo".

---
Tipo caixa de entregas de uma loja online. A caixa principal pode conter produtos individuais ou caixas menores contendo outros produtos. Para calcular o preço total do pedido, você não precisa abrir cada caixa e subcaixa manualmente verificando o que tem dentro: você apenas pede para a caixa principal "calcule o preço". Ela pergunta o preço de cada item dentro dela; se houver outra caixa interna, essa subcaixa faz a mesma coisa recursivamente até somar o total de tudo.

**Vantagens**

    Permite trabalhar com estruturas de árvores complexas de forma simples, executando métodos recursivos em toda a árvore.

    Princípio do Aberto/Fechado (OCP): É fácil introduzir novos tipos de elementos na árvore sem quebrar o código cliente existente.

**Desvantagens**

    Generalização excessiva