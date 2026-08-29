## Design Patterns: Façade
Tem a intenção de fornecer uma interface unificada para um conjunto de interfaces em um subsistema. Define a interface de nivel mais alto que torna o  sistema mais facil de ser usado 
---
Fazer um pedido em um aplicativo de entrega de comida. Por trás dos panos, o processo envolve verificar o estoque do restaurante, confirmar o pagamento com o cartão de crédito, notificar a cozinha para preparar a refeição e chamar um entregador via GPS. Você não precisa ligar para o restaurante, negociar com o motoboy e mandar o comprovante para o banco individualmente. Você apenas clica no botão "Fazer Pedido" no aplicativo. O aplicativo atua como o Facade, integrando todos esses subsistemas complexos.

**Vantagens**

    Isolamento de complexidade: Protege o código cliente da complexidade dos componentes do subsistema.

    Baixo acoplamento: Reduz a dependência entre o cliente e as classes internas do sistema.

    Facilidade de uso: Simplifica a navegação e a integração com bibliotecas de terceiros densas ou legadas.

**Desvantagens**

   O Facade pode acabar se tornando uma classe gigante conectada a quase todas as partes do sistema, centralizando responsabilidades demais.