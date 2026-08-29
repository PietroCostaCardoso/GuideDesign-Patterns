## Design pattern: Prototype
Copiar um objeto existente
Quando usar: quando a criação de um novo objeto do zero é muito demorada/ complexa, mas você já tem o modelo.

Em vez de criar um objeto do zero usando o operador new e configurar todos os seus atributos novamente, você pega um objeto que já existe e faz uma cópia exata dele.

---
**vantagens:**

- Performance: Clonar um objeto da memória costuma ser muito mais rápido do que instanciar e executar procedimentos pesados de inicialização (como consultas ao banco de dados).

- Independência de Classes Concretas: Você pode clonar um objeto sem saber a classe exata dele, apenas sabendo que ele implementa o método clonar().

- Redução de Subclasses: Evita a criação de muitas subclasses apenas para pré-configurar objetos de maneiras diferentes.
