## Design Patterns: Decorator
permite adicionar novos comportamentos a objetos individuais dinamicamente.
---

tipo se você está com frio, veste uma camisa. Se continuar com frio, coloca um casaco por cima da camisa. Se começar a chover, veste uma capa de chuva por cima do casaco. Cada peça de roupa adiciona uma nova "funcionalidade".

**Vantagens**

    Maior flexibilidade que a herança

    Princípio da Responsabilidade Única (SRP): É possível dividir uma classe cheia de comportamentos em várias classes menores, cada uma focada em uma funcionalidade específica.

    Combinação de comportamentos: Permite envolver um objeto em múltiplos decoradores para misturar seus efeitos.

**Desvantagens**
     É difícil remover um decorador específico do meio da pilha 

     Ordem de dependência: A ordem em que os decoradores são aplicados pode importar, o que exige cuidado na implementação.

    Muitas classes pequenas