## Design Patterns: Adapter
---
Permite que objetos com interfaces incompativeis trabalhem juntas,atuando como um  intermediário, traduzindo as chamadas de uma interface para que outra classe consiga entendê-las sem a necessidade de alterar o código-fonte original de nenhuma das partes.
---
Tipo um adaptador de tomada para viagens. Se você viaja do Brasil para a Europa com um notebook que possui o plugue no padrão brasileiro, não conseguirá ligá-lo diretamente na tomada parede europeia. O plugue e a tomada têm "interfaces" incompatíveis. Você utiliza um adaptador físico entre o cabo e a parede: ele recebe os pinos do seu notebook e entrega o formato exigido pela tomada, fazendo ambos funcionarem juntos sem que você precise trocar a tomada da parede ou o cabo do computador.

**Vantagens**

    - Princípio da Responsabilidade Única (SRP): Você separa a conversão de dados ou de interface da lógica de negócio principal da aplicação.

    - Princípio do Aberto/Fechado (OCP): Permite introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente.

    - Reutilização de código: Permite integrar bibliotecas de terceiros ou sistemas legados antigos sem precisar reescrever ou modificar o código original.

**Desvantagens**

    - Aumento da complexidade: A complexidade geral do código aumenta com a introdução de novas interfaces e classes adaptadoras.

    - Sobrecarga de abstração: Em cenários onde uma simples alteração na classe de origem seria suficiente e viável, criar um Adapter pode ser um excesso de engenharia (overengineering).