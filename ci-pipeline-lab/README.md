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
- Jest
- ESLint
- Babel, para transformar TypeScript durante os testes
- GitHub Actions, como ferramenta esperada para a pipeline de CI

## Estrutura atual

```text
.
|-- services/
|   `-- calculadora.service.ts
|-- test/
|   `-- calculadora.service.test.ts
|-- ../.github/workflows/
|   `-- ci.yml
|-- agents.md
|-- babel.config.cjs
|-- eslint.config.js
|-- index.ts
|-- jest.config.cjs
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

O `CalculadoraService` fornece quatro operacoes basicas:

- Soma
- Subtracao
- Multiplicacao
- Divisao

Cada operacao possui um teste automatizado com Jest em `test/calculadora.service.test.ts`.

## Como executar

Instale as dependencias:

```bash
npm ci
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

Execute os testes automatizados:

```bash
npm test
```

Execute a verificacao de lint:

```bash
npm run lint
```

## Scripts disponiveis

| Script | Comando | Descricao |
| --- | --- | --- |
| `dev` | `tsx watch index.ts` | Executa a aplicacao em modo de desenvolvimento. |
| `start` | `tsx index.ts` | Executa a aplicacao uma vez. |
| `build` | `tsc` | Valida e compila o projeto TypeScript. |
| `test` | `jest --runInBand` | Executa os testes automatizados com Jest. |
| `lint` | `eslint "**/*.ts"` | Analisa os arquivos TypeScript com ESLint. |

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

1. Criar cenarios intencionais de falha para observar como o CI responde.
2. Adicionar relatorios de cobertura de testes.
3. Experimentar variaveis de ambiente e secrets quando houver um exemplo simples que justifique o uso.

## Boas praticas para este laboratorio

- Mantenha a aplicacao simples.
- Priorize alteracoes que ajudem no aprendizado de CI.
- Adicione testes automatizados para comportamentos que possam ser testados.
- Evite infraestrutura ou complexidade arquitetural desnecessaria.
- Mantenha as configuracoes de CI faceis de ler e modificar.
- Prefira melhorias incrementais para estudar cada conceito separadamente.
- Explique configuracoes novas adicionadas a pipeline sempre que possivel.

## Estado atual

No momento, o projeto possui:

- Aplicacao TypeScript minima
- Servico de calculadora com quatro operacoes
- Quatro testes automatizados com Jest
- Verificacao de codigo com ESLint
- Build TypeScript funcional
- Lockfile para instalacao reproduzivel com `npm ci`
- Workflow do GitHub Actions executado em pushes e Pull Requests

O workflow `.github/workflows/ci.yml` instala as dependencias e executa automaticamente lint, testes e build quando arquivos deste laboratorio sao alterados em pushes ou Pull Requests.
