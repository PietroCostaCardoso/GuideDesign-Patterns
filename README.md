# GuideDesign-Patterns 

Um guia prático sobre **Padrões de Projeto (Design Patterns - GoF)**, desenvolvido com foco em estudos, aprendizado prático e consulta rápida.

---

## Sobre o Projeto

O **GuideDesign-Patterns** foi criado para servir como um material de referência para desenvolvedores que desejam entender, aplicar e dominar os **23 padrões de projeto do Gang of Four (GoF)**.

A proposta do guia é ir além da teoria, apresentando o problema real que cada padrão resolve, sua estrutura, exemplos práticos de código e orientações de quando usar.

> **Obs:**
> Padrões de Projeto (*Design Patterns*) focam na solução de problemas de código e na comunicação/estruturação de objetos a nível de implementação (*micro*). Eles complementam os **Padrões Arquiteturais** (como Clean Architecture, MVC ou Microserviços), que definem a organização global do sistema (*macro*).

---

## Estrutura do Repositório

O projeto está organizado pelas 3 categorias clássicas do GoF:

```text
GuideDesign-Patterns
├── 1-Criacionais          # Padrões Criacionais (Criação flexível de objetos)
│   ├── factory
│   ├── abstract
│   ├── builder
│   ├── prototype
│   └── singleton
├── 2-Estruturais         # Padrões Estruturais (Composição de classes e objetos)
│   ├── adapter
│   ├── bridge
│   ├── composite
│   ├── decorator
│   ├── facade
│   ├── flyweight
│   └── proxy
├── 3-Comportamentais        # Padrões Comportamentais (Comunicação entre objetos)
|   ├── chain of responsibility
|   ├── command
|   ├── interpreter
|   ├── iterator
|   ├── mediator
|   ├── memento
|   ├── observer
|   ├── state
|   ├── strategy
|   ├── template
|   └── visitor
└──  README.md
```  
> **Obs:**
> Por mais que existam 23 tipos de padrões de projeto na maioria das vezes não são usados todos. Os principais são: Strategy, Factory, Observer, Decorator, Adapter, Builder, Facade, Facade, Chain of Responsibility. Os outros podem até ser utilizados só que é mais dificil.

# Design Patterns (Padrões de Projeto)

São soluções gerais e reutilizáveis para problemas comuns no desenvolvimento de software.

## GoF (Gang of Four)
É o grupo específico de 4 autores. Eles catalogaram 23 padrões focados exclusivamente em **Programação Orientada a Objetos**.

---

### 3 Categorias

* **Criacionais:** Focam em como os objetos são criados.
* **Estruturais:** Focam em como juntar e organizar classes.
* **Comportamentais:** Focam em como os objetos interagem e dividem tarefas.

---

## Benefícios

* Não precisa reinventar a roda
* Padrões universais facilitam o entendimento
* Evita refatoração desnecessária
* Ajuda na reutilização do código (DRY – *Don't Repeat Yourself*)
* Ajuda no SOLID
* Facilitam a criação de testes unitários

---

## O que é ruim

* **Complexidade:** Até que você os entenda.
* **Muito código para atingir um objetivo muito simples.**
* **Pode trazer otimizações prematuras para seu código.**
* **Podem atrapalhar ao invés de ajudar.**
---

<div align="center">
  <img src="https://github.com/user-attachments/assets/aca57ec0-d1db-447d-88a2-5f6ab4f0e41d" width="45%" />
  <img src="https://github.com/user-attachments/assets/4876e71c-df78-40cf-8bdd-0aa9968b2842" width="45%" />
  <img src="https://github.com/user-attachments/assets/6f6b2d8f-e90b-4895-bf42-c56d7f41e393" width="45%" />
  <img src="https://github.com/user-attachments/assets/132ed05b-f6be-4909-9bf5-7727d26e1eb4" width="45%" />
  <img src="https://github.com/user-attachments/assets/4b0b0cf2-e3d4-4f22-abfe-bb4a14ff3699" width="45%" />
</div>
