## Design Patterns: Proxy
Controla o aceso a um objeto(age como intermediario/segurança)

---

**Vantagens**

    Controle sem alterar o objeto real: Adiciona segurança, logs ou cache sem modificar o código do objeto principal.

    Gerenciamento do ciclo de vida: Permite criar ou carregar objetos pesados apenas quando eles realmente forem necessários (lazy loading).

    Princípio do Aberto/Fechado (OCP): É possível introduzir novos proxies no sistema sem quebrar o código cliente.

**Desvantagens**

    Latença adicional: O tempo de resposta pode aumentar um pouco por conta da camada extra de intermediação.

    Complexidade no código: Introduz mais classes e abstrações ao sistema.