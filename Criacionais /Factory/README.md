## Design pattern: Factory 
Um metodo que decide qual objeto criar( o codigo principal apenas pede o objeto, sem saber a classe exata)
  vantagens:
  - encapsula a logica de criacao de objetos
  - permite criar objetos de diferentes tipos sem expor a logica de criacao
  - facilita a manutencao e extensao do codigo

  desvantagens:
  - pode adicionar complexidade desnecessaria

> Uso Ideal: Quando você não sabe os tipos exatos e as dependências dos objetos com os quais seu código deve trabalhar.