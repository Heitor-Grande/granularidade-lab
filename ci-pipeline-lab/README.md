# CI Pipeline Lab

Laboratorio pratico para estudar **Integracao Continua (CI - Continuous Integration)** usando uma aplicacao simples com **Node.js** e **TypeScript**.

O objetivo deste projeto nao e criar uma aplicacao complexa. A aplicacao deve permanecer pequena para que o foco fique nos conceitos de CI, na configuracao da pipeline e na observacao de cenarios de sucesso e falha.

## Objetivos de aprendizagem

Este laboratorio foi criado para praticar:

- GitHub Actions
- Pipelines de CI
- Testes automatizados
- Lint do codigo
- Validacao do build TypeScript
- Validacao de Pull Requests
- Fluxos com branches
- Instalacao de dependencias no ambiente de CI
- Uso de variaveis de ambiente e secrets, quando necessario

## Tecnologias

- Node.js
- TypeScript
- TSX
- GitHub Actions, como ferramenta esperada para a pipeline de CI

## Estrutura atual

```text
.
|-- agents.md
|-- index.ts
|-- package.json
|-- package-lock.json
|-- README.md
`-- tsconfig.json
```

O arquivo `index.ts` contem uma aplicacao minima:

```ts
console.log("Hello, World!");
```

Essa simplicidade e intencional. Ela permite evoluir a pipeline passo a passo sem misturar o aprendizado de CI com regras de negocio complexas.

## Como executar

Instale as dependencias:

```bash
npm install
```

Execute a aplicacao:

```bash
npm start
```

Execute em modo de desenvolvimento com recarregamento automatico:

```bash
npm run dev
```

Compile o projeto TypeScript:

```bash
npm run build
```

## Scripts disponiveis

| Script | Comando | Descricao |
| --- | --- | --- |
| `dev` | `tsx watch index.ts` | Executa a aplicacao em modo de desenvolvimento. |
| `start` | `tsx index.ts` | Executa a aplicacao uma vez. |
| `build` | `tsc` | Valida e compila o projeto TypeScript. |

## Pipeline esperada

A pipeline de CI deve evoluir progressivamente para executar as seguintes etapas:

1. Instalar as dependencias
2. Executar o lint
3. Executar os testes automatizados
4. Realizar o build do projeto TypeScript
5. Informar se a pipeline foi executada com sucesso ou falhou

Fluxo esperado:

```text
Desenvolvedor
      |
Git Push / Pull Request
      |
GitHub Actions
      |
Instalacao das dependencias
      |
Lint
      |
Testes
      |
Build
      |
Sucesso / Falha do CI
```

## Evolucao sugerida

Como este projeto e um laboratorio, a recomendacao e evoluir em pequenos passos:

1. Criar uma pipeline inicial que execute `npm install` e `npm run build`.
2. Adicionar uma ferramenta de lint e incluir o comando `npm run lint`.
3. Adicionar testes automatizados e incluir o comando `npm test`.
4. Configurar a pipeline para rodar em Pull Requests.
5. Criar cenarios intencionais de falha para observar como o CI responde.
6. Experimentar variaveis de ambiente e secrets quando houver um exemplo simples que justifique o uso.

## Boas praticas para este laboratorio

- Mantenha a aplicacao simples.
- Priorize alteracoes que ajudem no aprendizado de CI.
- Adicione testes automatizados para comportamentos que possam ser testados.
- Evite infraestrutura ou complexidade arquitetural desnecessaria.
- Mantenha as configuracoes de CI faceis de ler e modificar.
- Prefira melhorias incrementais para estudar cada conceito separadamente.
- Explique configuracoes novas adicionadas a pipeline sempre que possivel.

## Estado atual

No momento, o projeto possui uma aplicacao TypeScript minima e um script de build funcional.

Lint, testes automatizados e workflow do GitHub Actions ainda devem ser adicionados como parte da evolucao do laboratorio.
