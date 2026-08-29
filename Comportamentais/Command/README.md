## Design Patterns: Command
Transforma uma ação em um objeto para ser executado depois.
---
Exemplo: 
garçom de restaurante:

    Você (Cliente) faz o pedido ao garçom.

    O garçom não cozinha o prato. Ele escreve o pedido em um papelzinho (o Command).

    Esse papelzinho contém todas as informações e é colocado em uma fila na cozinha.

    O cozinheiro (Receiver) pega o papelzinho da fila e executa o preparo quando estiver pronto.

O papelzinho desacopla a sua mesa diretamente da cozinha. Ele pode ser colocado em fila, cancelado ou guardado para histórico.
---
**Vantagens:**
- Desacoplamento
- Suporte a Undo/Redo

**Desvantagens:**
- Aumento na quantidade de classes
- Complexidade
