# CLI IBGE de Localidades

![CLI IBGE Logo](https://raw.githubusercontent.com/L1malucas/cli-ibge/main/docs/logo.png) <!-- Substitua pelo caminho real da sua logo, se houver -->

Uma interface de linha de comando (CLI) interativa e amigável para consultar a API de Localidades do Instituto Brasileiro de Geografia e Estatística (IBGE). Desenvolvida com foco em experiência do usuário (UX), esta ferramenta permite navegar pelos diversos endpoints da API de forma intuitiva, sem a necessidade de memorizar IDs ou URLs complexas.

## :goal_net: Objetivo

Facilitar o acesso aos dados geográficos e estatísticos do IBGE através de uma interface de terminal colorida e interativa. A CLI abstrai a complexidade das requisições HTTP e do gerenciamento de IDs, permitindo que o usuário se concentre na obtenção das informações desejadas.

## :sparkles: Funcionalidades

-   **Navegação por Menus:** Menu principal em formato de colunas numeradas para seleção de módulos (grupos de endpoints).
-   **Autocomplete Inteligente:** Seleção de endpoints e parâmetros com sugestões em tempo real, buscando dados da própria API para preencher as opções (ex: selecionar um estado pelo nome em vez de digitar seu ID).
-   **Feedback Visual:** Indicadores de carregamento (spinners) durante as operações assíncronas (chamadas à API, salvamento de arquivos).
-   **Salvamento de Resultados:** Opção de salvar o retorno de qualquer consulta em um arquivo JSON local, com nome de arquivo gerado automaticamente e opção de escolher o diretório.
-   **Logs de Erro:** Serviço de log abstrato que registra detalhes de erros em um arquivo `logs/error.log` para facilitar a depuração e manutenção.
-   **Estrutura Modular:** Fácil adição e manutenção de novos endpoints através de arquivos de módulo TypeScript dedicados.

## :gear: Tecnologias Utilizadas

-   **Node.js:** Ambiente de execução JavaScript.
-   **TypeScript:** Linguagem de programação para tipagem estática e melhor organização do código.
-   **Inquirer.js:** Framework para criar interfaces de linha de comando interativas.
-   **Inquirer Autocomplete Prompt:** Plugin para `Inquirer.js` que adiciona funcionalidade de autocomplete.
-   **Axios:** Cliente HTTP baseado em Promises para fazer requisições à API do IBGE.
-   **Chalk:** Biblioteca para estilizar a saída do terminal com cores e estilos.
-   **Ora:** Biblioteca para exibir spinners de carregamento no terminal.

## :rocket: Instalação

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 14 ou superior) e o [Yarn](https://yarnpkg.com/) instalados em sua máquina.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/L1malucas/cli-ibge.git
    cd cli-ibge
    ```

2.  **Instale as dependências:**
    ```bash
    yarn install
    ```

3.  **Compile o projeto:**
    ```bash
    yarn build
    ```

4.  **Torne a CLI executável globalmente (opcional):**
    ```bash
    yarn link
    # Agora você pode executar a CLI de qualquer lugar usando 'ibge-cli'
    ```
    Ou, para executar diretamente do diretório do projeto:
    ```bash
    yarn dev
    ```

## :computer: Como Usar

Para iniciar a CLI, execute:

```bash
# Se você usou 'yarn link'
ibge-cli

# Ou, se estiver no diretório do projeto
yarn dev
```

### Navegação

1.  **Menu Principal:** Você verá uma lista numerada dos módulos da API (ex: Aglomerações Urbanas, Distritos, Países). Digite o número correspondente à sua escolha e pressione `Enter`.
    *   Digite `0` para sair da aplicação.

2.  **Seleção de Endpoint:** Após escolher um módulo, um novo menu de autocomplete aparecerá com os endpoints disponíveis para aquele módulo. Comece a digitar para filtrar as opções e use as setas para selecionar. Pressione `Enter` para confirmar.

3.  **Coleta de Parâmetros:** Se o endpoint selecionado exigir parâmetros (ex: ID de um estado, nome de um município):
    *   **Parâmetros com `source` (autocomplete):** Para parâmetros como `UF` ou `municipio`, a CLI buscará as opções na API e apresentará um prompt de autocomplete. Comece a digitar o nome e selecione a opção desejada.
    *   **Parâmetros de `input`:** Para outros parâmetros, será solicitado que você digite o valor diretamente.

4.  **Execução e Salvamento:** Após coletar todos os parâmetros, a CLI executará a requisição à API. Um spinner de carregamento será exibido. Se a requisição for bem-sucedida, você terá a opção de salvar o resultado em um arquivo JSON. Será solicitado o diretório de destino (deixe em branco para salvar no diretório atual).

## :hammer_and_wrench: Estrutura do Projeto e Mapeamento da API

Esta CLI é construída de forma modular. A definição de cada módulo da API (seus endpoints, parâmetros e como buscar opções para autocomplete) reside em arquivos TypeScript separados dentro de `src/modules/`.

-   `src/modules/`: Contém um arquivo `.ts` para cada módulo da API (ex: `paises.ts`, `distritos.ts`).
-   `src/modules/index.ts`: Agrega todos os módulos em um único array `allModules` que é usado pela aplicação.
-   `src/types/api.ts`: Define as interfaces TypeScript para a estrutura dos módulos, endpoints e parâmetros.

### Como Adicionar/Modificar Endpoints

Para adicionar um novo endpoint ou modificar um existente, você deve editar o arquivo `.ts` correspondente em `src/modules/`. A estrutura de um módulo é a seguinte:

```typescript
// Exemplo de estrutura de um módulo
import { ApiModule } from '../types/api';

export const meuNovoModulo: ApiModule = {
  name: "Meu Novo Módulo",
  endpoints: [
    {
      summary: "Descrição curta do endpoint para o menu",
      description: "Descrição detalhada do que este endpoint faz.",
      method: "GET", // Ou POST, PUT, DELETE se a API suportar e a CLI for estendida
      path: "/caminho/da/api/{parametro}",
      parameters: [
        {
          name: "parametro",
          in: "path", // ou 'query'
          description: "Descrição do parâmetro para o prompt",
          required: true,
          source: { // Opcional: para prompts de autocomplete
            endpoint: "/caminho/para/buscar/opcoes",
            valueField: "id", // Campo do objeto retornado que será o valor do parâmetro
            displayField: "nome" // Campo do objeto retornado que será exibido ao usuário
          }
        }
      ]
    }
  ]
};
```

## :bug: Reportando Problemas e Contribuições

Encontrou um bug, um endpoint desatualizado ou gostaria de sugerir uma nova funcionalidade?

Por favor, abra uma issue no repositório do projeto:

:link: [**Abrir uma Issue no GitHub**](https://github.com/L1malucas/cli-ibge/issues)

Ao abrir uma issue, forneça o máximo de detalhes possível, incluindo:
-   Passos para reproduzir o problema.
-   Comportamento esperado vs. comportamento observado.
-   Mensagens de erro completas (incluindo stack trace, se aplicável).
-   Contexto da sua consulta (módulo, endpoint, parâmetros).

Sua contribuição é muito bem-vinda!

## :page_facing_up: Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
