## Design Patterns: Visitor
permite adicionar novas operações a uma estrutura de objetos existente sem precisar modificar as classes desses objetos.
---
Quando Usar
- Quando você tem uma estrutura de objetos complexa (como uma árvore) e precisa executar operações nela que não pertencem diretamente às classes dos objetos.

- Quando você quer evitar poluir classes com lógicas secundárias (como exportar para PDF, gerar relatórios ou calcular impostos).

- Quando as classes da estrutura raramente mudam, mas você frequentemente precisa adicionar novas operações a elas.