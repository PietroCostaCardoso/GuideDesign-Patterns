## Design Patterns: Flyweight
É utilizado para economizar memoria RAM. (não é muito utilizado então não precisa focar tanto em apreender ele)
---

**Vantagens**

    Economia de RAM: Reduz drasticamente o consumo de memória quando a aplicação lida com centenas de milhares de objetos semelhantes.

**Desvantagens**

    Troca de Memória por CPU: Pode consumir um pouco mais de processamento (CPU) para calcular ou montar o estado extrínseco toda vez que um método for executado.

    Complexidade de Código: Torna o código mais complexo e abstrato, exigindo o gerenciamento de uma fábrica (Factory) para gerenciar a reutilização dos objetos Flyweight.