# Projeto Atomic Playwright

Este é um projeto de automação de testes end-to-end (E2E) utilizando o Playwright em [**TypeScript**](https://www.typescriptlang.org/). Ele tem como objetivo validar os menus e formulários do site [Atomic Solutions](https://www.atomicsolutions.com.br/) de forma automatizada e estruturada, seguindo as melhores práticas de automação com Page Object Model (POM).

## Índice

- Visão Geral
- Tecnologias Utilizadas
- Estrutura de Pastas
- Configuração do Projeto
- Executando os Testes
- Capturas de Tela
- Contribuição
- Licença

## Visão Geral

Este projeto realiza testes automatizados nos seguintes cenários:

- Validação dos menus principais no site Atomic Solutions.
- Navegação até a página de Contato e preenchimento do formulário.
- Navegação entre outras páginas do site e interação com elementos visíveis.
- Uso de boas práticas de automação de testes com o padrão Page Object Model (POM), separando os seletores e as ações da página para facilitar a manutenção.

## Tecnologias Utilizadas

- Playwright: Framework para automação de testes E2E.
- TypeScript: Linguagem de programação tipada que melhora a qualidade do código.
- pnpm: Gerenciador de pacotes rápido e eficiente.
- ESLint e Prettier: Para manter a consistência e qualidade do código.

## Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```
playwright-menu-validation/
│
├── src/
│   ├── pages/                # Page Objects que encapsulam ações de páginas
│   │   └── ContactPage.ts
│   ├── selectors/            # Seletores utilizados nas páginas
│   │   └── selectors.json
│   └── tests/                # Arquivos de testes
│       └── menu-validation.spec.ts
├── screenshots/              # Capturas de tela geradas durante os testes
├── test-results/             # Resultados dos testes
├── .eslintrc.json            # Configurações do ESLint
├── .prettierrc               # Configurações do Prettier
├── playwright.config.ts      # Configurações do Playwright
├── pnpm-lock.yaml            # Lockfile gerado pelo pnpm
├── package.json              # Dependências do projeto
└── tsconfig.json             # Configurações do TypeScript
```

## Configuração do Projeto

### Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 14 ou superior)
- pnpm (recomendado)

## Instalação

Clone este repositório e instale as dependências:

```
git clone https://github.com/DevWide/projeto_atomic_playwright.git
cd projeto_atomic_playwright
pnpm install
```

## Configuração do Playwright

O projeto já inclui as configurações necessárias no arquivo playwright.config.ts, incluindo a URL base do site Atomic Solutions.

Se necessário, ajuste o arquivo playwright.config.ts para alterar configurações como tempo de execução, headless mode, e diretórios de screenshots.

## Executando os Testes

Para executar os testes, você pode rodar o seguinte comando:

```
pnpm exec playwright test
```

### Modo UI

Se você deseja executar os testes com uma interface visual para acompanhar a execução, rode:

```
pnpm exec playwright test --ui
```

### Testes com Navegador Visível

Para rodar os testes com o navegador visível e em modo desacelerado:

```
pnpm exec playwright test --headed --slow-mo=500
```

## Capturas de Tela

As capturas de tela serão salvas na pasta screenshots/ após a execução dos testes. Cada etapa crítica dos testes, como o preenchimento de formulários ou navegação entre páginas, é registrada para facilitar a análise.

Exemplos de screenshots:

- form-filled.png: Screenshot após preencher o formulário de contato.
- post-clicked.png: Screenshot após clicar em um post do blog.

## Contribuição

Sinta-se à vontade para contribuir com este projeto, abrindo issues ou enviando pull requests.

## Como Contribuir:

1. Faça um fork do repositório.
2. Crie um branch para sua feature: git checkout -b minha-feature.
3. Faça as alterações desejadas.
4. Envie suas alterações com um pull request.

## Licença

Este projeto está licenciado sob a
MIT License.
