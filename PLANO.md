# Plano de Ação: CLI de Consulta ao IBGE

## Fase 1: Estruturação e Configuração do Projeto

- [X] **Limpeza do Projeto:** Remover arquivos da estrutura Vite.
- [X] **Atualização do `package.json`:** Configurar para CLI e adicionar dependências base.
- [X] **Ajuste do `tsconfig.json`:** Configurar para um ambiente Node.js.
- [X] **Instalação das Dependências:** Rodar `yarn install`.

---

## Fase 2: Implementação da CLI Dinâmica

- [X] **2.1. Definição do `api-map.json`**
- [X] **2.2. Instalação de Dependências Adicionais (`inquirer-autocomplete-prompt`)**
- [X] **2.3. Módulo de Configuração (`src/config/loader.ts`)**
- [X] **2.4. Ponto de Entrada e Mensagem de Boas-Vindas (`src/main.ts`)**
- [X] **2.5. Lógica de Prompts com Autocomplete (`src/ui/prompts.ts`)**
- [X] **2.6. Orquestrador do Menu (`src/ui/menu.ts`)**
- [X] **2.7. Cliente de API Genérico (`src/api/ibge.ts`)**
- [X] **2.8. Utilitário para Salvar Arquivos (`src/utils/fileSaver.ts`)**

---

## Fase 3: Documentação e Finalização

- [ ] **Criação do `README.md`**
  - [ ] Descrever o que é o projeto e seu propósito.
  - [ ] Detalhar como instalar e executar a CLI.
  - [ ] Explicar a importância e a estrutura do `api-map.json`.
  - [ ] Adicionar exemplos de uso.

---

## Fase 4: Mapeamento Incremental dos Módulos da API

O objetivo desta fase é popular o `api-map.json` com todos os endpoints definidos no `official_doc.md`, testando cada módulo após sua adição.

- [X] Módulo: Países
- [X] Módulo: Regiões
- [X] Módulo: Distritos
- [X] Módulo: Aglomerações Urbanas
- [X] Módulo: Mesorregiões
- [X] Módulo: Microrregiões
- [X] Módulo: Regiões Imediatas
- [X] Módulo: Regiões Intermediárias
- [X] Módulo: Regiões Integradas de Desenvolvimento
- [X] Módulo: Regiões Metropolitanas
- [X] Módulo: Subdistritos
- [X] Módulo: Unidades da Federação (UFs)