# AGENTS.md

## Visão Geral do Projeto

Este repositório é um projeto de aprendizado focado em **Integração Contínua (CI — Continuous Integration)**.

O principal objetivo do `ci-pipeline-lab` é estudar, implementar e experimentar pipelines de CI utilizando uma aplicação simples desenvolvida com Node.js e TypeScript.

A aplicação deve permanecer propositalmente simples. O foco deste projeto não é desenvolver regras de negócio complexas, mas aprender na prática os conceitos, ferramentas e boas práticas relacionadas a CI.

## Objetivos

Este projeto deve ser utilizado para praticar:

* GitHub Actions
* Pipelines de CI
* Testes automatizados
* Lint do código
* Validação do build do TypeScript
* Validação de Pull Requests
* Fluxos com branches
* Cenários de falha e sucesso da pipeline
* Instalação de dependências no ambiente de CI
* Variáveis de ambiente e secrets, quando necessário

## Pipeline Esperada

A pipeline de CI deve evoluir progressivamente para executar as seguintes etapas:

1. Instalar as dependências
2. Executar o lint
3. Executar os testes automatizados
4. Realizar o build do projeto TypeScript
5. Informar se a pipeline foi executada com sucesso ou falhou

Fluxo esperado:

```text
Desenvolvedor
      ↓
Git Push / Pull Request
      ↓
GitHub Actions
      ↓
Instalação das dependências
      ↓
Lint
      ↓
Testes
      ↓
Build
      ↓
Sucesso / Falha do CI
```

## Diretrizes de Desenvolvimento

Ao modificar este repositório:

* Mantenha a aplicação simples.
* Priorize alterações que ajudem no aprendizado de CI.
* Adicione testes automatizados para comportamentos que possam ser testados.
* Evite adicionar infraestrutura ou complexidade arquitetural desnecessária.
* Mantenha as configurações de CI simples e fáceis de entender.
* As falhas da pipeline devem ser claras para facilitar o aprendizado.
* Prefira melhorias incrementais, permitindo estudar cada conceito de CI separadamente.
* Sempre que possível, explique configurações novas adicionadas à pipeline.

## Importante

Este repositório é principalmente um **laboratório de aprendizado de CI**.

Ao sugerir ou implementar alterações, priorize o valor educacional, a simplicidade e a experimentação com Integração Contínua em vez de complexidade ou requisitos de produção.
