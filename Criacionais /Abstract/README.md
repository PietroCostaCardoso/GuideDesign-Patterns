## Design Patterns: Abstract
   Uma fabrica que cria um conjunto (familia) de produtos diferentes, mas que obrigatoriamente combinam entre si.

 O principal objetivo deste padrão é garantir a compatibilidade entre os objetos criados.

Tipo se o sistema estiver rodando no modo "Escuro",  garante que todos os elementos criados  pertençam à família do tema escuro, impedindo a mistura indevida com elementos do tema claro.
---

 **Vantagens e Desvantagens**

   -  Garantia de Compatibilidade: Certeza de que os produtos extraídos de uma mesma fábrica funcionam juntos sem conflitos.

   - Isolamento de Código: Aplica o Princípio de Responsabilidade Única (SRP) e o Princípio Aberto/Fechado (OCP).

   -  Complexidade Elevada: Exige a criação de muitas interfaces e classes, o que pode complicar o código se o sistema não precisar de famílias completas de produtos.