# Software Architecture Lab

Laboratório prático de arquitetura e design de software desenvolvido com Node.js e TypeScript.

O projeto usa um fluxo simplificado de criação de pedidos para comparar diferentes níveis de granularidade de componentes. O objetivo não é representar um sistema completo de vendas, mas tornar visíveis as consequências de cada decisão arquitetural.

## Conceitos estudados

- Granularidade grossa e granularidade fina
- Separação de responsabilidades
- Coesão e acoplamento
- Injeção de dependências pelo construtor
- Composição manual de objetos
- Modificadores `public`, `private` e `readonly`
- Tratamento e propagação de erros
- Operações obrigatórias e operações secundárias
- ECMAScript Modules com TypeScript e Node.js

## Fluxo do exemplo

A criação de um pedido executa as seguintes etapas:

1. Verifica se o usuário está ativo.
2. Consulta o estoque disponível.
3. Localiza o produto solicitado.
4. Valida a quantidade em estoque.
5. Calcula o valor total.
6. Processa o pagamento.
7. Tenta enviar o e-mail de confirmação.

O envio do e-mail é considerado uma operação secundária. Se ele falhar, a falha é registrada, mas o pedido continua sendo considerado criado.

## Estrutura do projeto

```text
.
|-- granularidade
|   |-- fina
|   |   |-- calcularTotal.service.ts
|   |   |-- consultarEstoqueDoProduto.service.ts
|   |   |-- consultarEstoqueGeral.service.ts
|   |   |-- enviarEmailDeConfirmacaoDoPedido.service.ts
|   |   |-- pedido.service.ts
|   |   |-- processarPagamento.service.ts
|   |   |-- validarEstoque.service.ts
|   |   `-- verificarUsuarioAtivo.service.ts
|   |-- grossa
|   |   `-- pedido.service.ts
|   `-- interface
|       |-- estoque.ts
|       |-- pedido.ts
|       `-- usuario.ts
|-- index.ts
|-- package.json
`-- tsconfig.json
```

## Granularidade grossa

Na implementação de granularidade grossa, uma única classe `PedidoService` concentra todo o fluxo e suas regras:

- validação do usuário;
- consulta e validação do estoque;
- cálculo do total;
- processamento do pagamento;
- envio da confirmação.

Os métodos privados organizam internamente o código, mas não criam novos componentes. Todas as responsabilidades continuam pertencendo à mesma classe.

### Vantagens

- Composição simples
- Menor quantidade de arquivos e objetos
- Fluxo fácil de localizar em exemplos pequenos

### Desvantagens

- Maior acoplamento entre responsabilidades
- Menor possibilidade de reutilização isolada
- Testes e alterações podem afetar uma classe maior
- Tendência de crescimento contínuo do componente

## Granularidade fina

Na implementação de granularidade fina, cada parte do fluxo foi extraída para um serviço especializado. O `PedidoService` deixa de implementar todas as regras e passa a coordenar a colaboração entre os componentes.

```text
PedidoService
|-- VerificarUsuarioAtivoService
|-- ConsultarEstoqueGeralService
|-- ConsultarEstoqueDoProdutoService
|-- ValidarEstoqueService
|-- ProcessarPagamentoService
|   `-- CalcularTotalService
`-- EnviarEmailDeConfirmacaoDoPedidoService
```

### Vantagens

- Responsabilidades mais isoladas
- Componentes menores e mais especializados
- Maior facilidade para testar partes específicas
- Possibilidade de reutilizar ou substituir serviços

### Desvantagens

- Mais arquivos e instâncias para administrar
- Construção do objeto principal mais trabalhosa
- Risco de fragmentar o domínio em classes pequenas demais
- Fluxo distribuído entre vários componentes

A fragmentação desta implementação é intencional para tornar o contraste didático. Em um sistema de produção, operações relacionadas poderiam ser agrupadas por capacidade de negócio, como `EstoqueService`, `PagamentoService` e `NotificacaoService`.

## Injeção de dependências

O `PedidoService` de granularidade fina recebe seus colaboradores pelo construtor:

```ts
constructor(
    private verificarUsuarioAtivo: VerificarUsuarioAtivoService,
    private validarEstoque: ValidarEstoqueService,
    private processarPagamento: ProcessarPagamentoService,
    private enviarEmail: EnviarEmailDeConfirmacaoDoPedidoService,
    private consultarEstoqueGeral: ConsultarEstoqueGeralService,
    private consultarEstoqueDoProduto: ConsultarEstoqueDoProdutoService
) {}
```

Essa técnica evita que o serviço principal crie diretamente suas dependências. As instâncias são construídas no `index.ts`, que funciona como o ponto de composição da aplicação.

Para projetos pequenos, a composição manual é uma solução explícita e adequada. Em aplicações maiores, essa montagem pode ser movida para fábricas, módulos de composição ou um contêiner de injeção de dependências.

## `public`, `private` e `readonly`

Parâmetros de construtor com modificadores também se tornam propriedades da classe:

```ts
constructor(
    private readonly estoqueService: EstoqueService,
    public pagamentoService: PagamentoService
) {}
```

- `public`: permite acesso dentro e fora da classe.
- `private`: permite acesso somente dentro da classe.
- `readonly`: impede que a propriedade receba outra referência depois da construção.
- Sem modificador: o valor é apenas um parâmetro e não se torna uma propriedade automaticamente.

Para dependências internas, `private readonly` costuma expressar melhor a intenção.

## Tratamento de erros

Os métodos internos lançam erros quando identificam uma regra inválida. O serviço orquestrador define como a operação principal deve reagir.

Erros não devem ser capturados e relançados em todas as camadas sem necessidade, pois isso cria mensagens repetidas e dificulta a leitura. Um `catch` interno é mais útil quando consegue:

- recuperar a operação;
- transformar o erro em uma informação relevante;
- adicionar contexto necessário;
- tratar uma operação secundária de forma independente.

O envio de e-mail é um exemplo do último caso: sua falha é tratada separadamente para não cancelar a criação do pedido.

## Módulos e imports TypeScript

O projeto utiliza ECMAScript Modules por meio de `"type": "module"` no `package.json` e das opções `NodeNext` no `tsconfig.json`.

Os imports relativos podem ser escritos com a extensão `.ts`:

```ts
import ValidarEstoqueService from "./validarEstoque.service.ts";
```

A opção abaixo converte extensões TypeScript relativas para suas equivalentes JavaScript durante o build:

```json
{
  "compilerOptions": {
    "rewriteRelativeImportExtensions": true
  }
}
```

Assim, o código-fonte usa `.ts` e os arquivos emitidos usam `.js`.

## Tecnologias

- Node.js
- TypeScript
- TSX

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o exemplo atual:

```bash
npm start
```

Execute em modo de desenvolvimento com recarregamento automático:

```bash
npm run dev
```

Compile o TypeScript:

```bash
npm run build
```

## Conclusão

Granularidade não é medida apenas pela quantidade de métodos ou pelo tamanho dos arquivos. Ela representa como responsabilidades e capacidades são distribuídas entre componentes.

A granularidade grossa favorece simplicidade de composição, enquanto a granularidade fina favorece isolamento e especialização. Nenhuma abordagem é sempre superior: a escolha depende do tamanho do sistema, da frequência de mudanças, das necessidades de reutilização e do custo de administrar as dependências.
