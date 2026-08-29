## Design Patterns: state
Permite a um objeto alterar seu comportamento quando seu estado interno muda. É como se o objeto mudasse de classe em tempo de execução.
---
Analogia:
Pense no Botão de Ligar da sua TV:
- Se a TV está Desligada, apertar o botão faz a TV ligar.
- Se a TV está Ligada, apertar o exato mesmo botão faz a TV desligar.

Quando Usar
- Quando você tem um objeto cuja resposta muda dependendo do seu estado atual e você tem um monte de condicionais gigantes (if/else ou switch) verificando essa variável de estado.
- Para implementar Máquinas de Estado Finitas (FSM), comuns em fluxos de compras, pedidos de entrega ou jogos.