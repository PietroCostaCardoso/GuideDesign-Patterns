## Design Patterns: Bridge
---
Divide uma classe grande em 2 separadas. Ele resolve o problema de ter variações multiplicativas de classes

---
Tipo pense em um controle remoto e uma televisão. O controle remoto tem botões comuns como ligar, aumentar, diminuir, mas a execução real ocorre no circuito interno da TV. Você pode ter controles avançados e diferentes marcas de TV. O controle não precisa saber os detalhes de como a TV acende a tela; ele apenas guarda uma referência à TV e envia o comando. A ponte é a conexão entre o controle e a TV.

**Vantagens**

    - Desacoplamento: A lógica de alto nível fica totalmente independente dos detalhes do sistema de baixo nível.

    - Princípio do Aberto/Fechado (OCP): Você pode introduzir novas Abstrações (novos controles) e novas Implementações  sem quebrar o código existente.

    - Princípio da Responsabilidade Única (SRP): Concentra a lógica de negócio na Abstração e os detalhes da plataforma na Implementação.

**Desvantagens**
     - Aumento de Complexidade