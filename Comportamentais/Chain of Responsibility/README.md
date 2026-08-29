## Design Patterns: Chain of Responsibility
Uma fila de objetos onde cada um decide se resolve o problema ou passa para o proximo.
---
Uma exemplo caso não entendeu: tipo uma empresa de telefonia, você liga lá e um robô vai te atender se ele não conseguir responder ele passa para o atendente e se o atendente não conseguir responder ele passa para alguém mais qualificado.
---
Quando Usar
-Múltiplos objetos podem tratar uma requisição, e o manipulador exato não precisa ser conhecido a priori (é determinado dinamicamente).
-Você quer emitir uma requisição para um entre vários objetos sem especificar explicitamente o receptor final.
-O conjunto de objetos que podem tratar a requisição deve ser definido de forma dinâmica (você pode adicionar, remover ou reordenar os elos a qualquer momento).

Exemplo: Pipelines de validação (ex: verificar se o usuário está autenticado > verificar se tem permissão > validar os dados do formulário > processar a compra).

---
**Vantagens**

- Baixo acoplamento
- Princípio da Responsabilidade Única
- Princípio do Aberto/Fechado

**Desvantagens**

- Sem garantia de recebimento
- Dificuldade de depuração
- Impacto em performance