## Design pattern: singleton
É um padrão de projeto criacional que garante que uma classe tenha apenas uma única instância em toda a aplicação e fornece um ponto de acesso global para ela.
É o padrão ideal para controlar recursos compartilhados, como conexões com banco de dados, sistemas de log ou configurações de um aplicativo.

Exemplo:
O Presidente de um País
Um país pode ter milhões de cidadãos, mas possui apenas um Presidente em exercício por vez.

---
**Vantagens e Cuidados**

    Acesso Controlado: Garante que o estado compartilhado não seja sobrescrito por instâncias duplicadas.

    Economia de Memória: O objeto pesado é inicializado apenas uma vez.

    Cuidado (Anti-pattern): O uso excessivo de Singletons introduz estado global ao código. Isso pode dificultar a escrita de testes unitários automatizados, pois um teste pode alterar os dados que outro teste esperava receber.