# API de Localidades

## API e Documentação

**Versão:** 1.0.0

API referente aos países e às divisões político-administrativas do Brasil, bem como mesorregiões e microrregiões, institucionalizadas pela aprovação da presidência do IBGE da resolução PR nº 51/1989 e pela publicação *Divisão regional do Brasil em mesorregiões e microrregiões geográficas*.

**obs 1:** Exceptuando-se as rotas referentes aos países, os identificadores providos pela presente API são oficialmente designados pelo IBGE.  
**obs 2:** As regiões geográficas imediatas e intermediárias decorrem da revisão das microrregiões e mesorregiões diante do expressivo aumento das diferenças inter-regionais, como resultado das mudanças econômicas, demográficas, políticas e ambientais ocorridas ao longo das últimas décadas. Assim, as regiões geográficas imediatas e intermediárias serão periodicamente revisadas, visando oferecer elementos para a compreensão da realidade brasileira. Adicionalmente, passam a substituir as mesorregiões e microrregiões geográficas de forma progressiva até 21/12/2023. Para maiores informações, incluindo metodologia e nomenclatura, acesse *Divisão regional do Brasil em regiões geográficas imediatas e regiões geográficas intermediárias*.  
**obs 3:** Para fins das rotas relacionadas aos países, os países foram organizados de acordo com a metodologia M49 da Organização das Nações Unidas, segundo o qual os países são agrupados em regiões - Equivalente ao que conhecemos como continentes -, sub-regiões e regiões intermediárias, da qual o Brasil é signatário. Para maiores informações, acesse https://unstats.un.org/unsd/methodology/m49/.  
**obs 4:** Se desejar, use o Query Builder para gerar consultas customizadas.

## Endpoints

### Aglomerações Urbanas

#### Aglomerações Urbanas por Identificador
Obtém o conjunto de aglomerações urbanas a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas/{aglomeracao-urbana}`

**Parâmetros de Path:**
- `aglomeracao-urbana*` (string, required): Um ou mais identificadores de aglomerações urbanas delimitados pelo caracter | (pipe).  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas/00301` (Obtém os dados referentes à Aglomeração Urbana de Franca (00301)).

**Parâmetros de Query:**
- `orderBy` (string): Se desejar ordenar alfabeticamente pelo nome da aglomeração urbana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas?orderBy=nome` (Obtém as aglomerações urbanas ordenadas alfabeticamente pelo nome).

**Responses:**
- **200:** Um array de aglomerações urbanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "municipios": [
        {}
      ]
    }
  ]
  ```

#### Aglomerações Urbanas
Obtém o conjunto de aglomerações urbanas do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas`

**Parâmetros de Query:**
- `orderBy` (string): Se desejar ordenar alfabeticamente pelo nome da aglomeração urbana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas?orderBy=nome` (Obtém as aglomerações urbanas ordenadas alfabeticamente pelo nome).
- `municipio` (string): Se desejar saber à qual aglomeração urbana um determinado município pertence, informe o parâmetro municipio com o respectivo identificador.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/aglomeracoes-urbanas?municipio=2611101` (Obtém os dados referentes à aglomeração urbana do município de Petrolina/PE (2611101)).

**Responses:**
- **200:** Um array de aglomerações urbanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "municipios": [
        {}
      ]
    }
  ]
  ```

### Distritos

#### Distritos
Obtém o conjunto de distritos do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/distritos`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Identificador
Obtém o conjunto de distritos do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/distritos/{id}`

**Parâmetros de Path:**
- `id*` (string, required): Um ou mais identificadores de distrito delimitados pelo caracter | (pipe).  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos/160030312` (Obtém os dados referentes ao distrito de Fazendinha/AP (160030312)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por UF
Obtém o conjunto de distritos do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/distritos` (Obtém os dados referentes aos distritos do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/distritos` (Obtém os dados referentes aos distritos do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Mesorregião
Obtém o conjunto de distritos do Brasil a partir dos identificadores das mesorregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/{mesorregiao}/distritos`

**Parâmetros de Path:**
- `mesorregiao*` (string, required): Um ou mais identificadores de mesorregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/1602/distritos` (Obtém os dados referentes aos distritos da mesorregião Sul do Amapá/AP (1602)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/1602|4307/distritos` (Obtém os dados referentes aos distritos das mesorregiões Sul do Amapá/AP (1602) e Sudeste Rio-grandense/RS (4307)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Microrregião
Obtém o conjunto de distritos do Brasil a partir dos identificadores das microrregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/{microrregiao}/distritos`

**Parâmetros de Path:**
- `microrregiao*` (string, required): Um ou mais identificadores de microrregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/16003/distritos` (Obtém os dados referentes aos distritos da microrregião Macapá/AP (16003)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/16003|43032/distritos` (Obtém os dados referentes aos distritos das microrregiões Macapá/AP (16003) e Serras de Sudeste/RS (43032)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Município
Obtém o conjunto de distritos do Brasil a partir dos identificadores dos municípios.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos`

**Parâmetros de Path:**
- `municipio*` (string, required): Um ou mais identificadores de municípios delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos` (Obtém os dados referentes aos distritos do município de São Paulo/SP (3550308)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308|1501402/distritos` (Obtém os dados referentes aos distritos dos municípios de São Paulo/SP (3550308) e Belém/PA (1501402)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Região Imediata
Obtém o conjunto de distritos do Brasil a partir dos identificadores das regiões imediatas.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/{regiao-imediata}/distritos`

**Parâmetros de Path:**
- `regiao-imediata*` (string, required): Um ou mais identificadores de regiões imediatas delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/310037/distritos` (Obtém os dados referentes aos distritos da região imediata Barbacena/MG (310037)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/330002|330005/distritos` (Obtém os dados referentes aos distritos das regiões imediatas Angra dos Reis/RJ (330002) e Resende/RJ (330005)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Região Intermediária
Obtém o conjunto de distritos do Brasil a partir dos identificadores das regiões intermediárias.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/{regiao-intermediaria}/distritos`

**Parâmetros de Path:**
- `regiao-intermediaria*` (string, required): Um ou mais identificadores de regiões intermediárias delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/2603/distritos` (Obtém os dados referentes aos distritos da região intermediária Serra Talhada/PE (2603)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/2604|2908/distritos` (Obtém os dados referentes aos distritos das regiões intermediárias Petrolina/PE (2604) e Juazeiro/BA (2908)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

#### Distritos por Região
Obtém o conjunto de distritos do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/distritos`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/distritos` (Obtém os dados referentes aos distritos da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/distritos` (Obtém os dados referentes aos distritos das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os distritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do distrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome` (Obtém os distritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado`.

**Responses:**
- **200:** Um array de distritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "municipio": {
        "id": 0,
        "nome": "string",
        "microrregiao": {},
        "regiao-imediata": {}
      }
    }
  ]
  ```

### Mesorregiões

#### Mesorregiões por UF
Obtém o conjunto de mesorregiões do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/mesorregioes`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/mesorregioes` (Obtém os dados referentes às mesorregiões do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/mesorregioes` (Obtém os dados referentes às mesorregiões do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as mesorregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da mesorregião. Se desejar ordenar alfabeticamente pelo nome da mesorregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?orderBy=nome` (Obtém as mesorregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?view=nivelado`.

**Responses:**
- **200:** Um array de mesorregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Mesorregiões
Obtém o conjunto de mesorregiões do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as mesorregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da mesorregião. Se desejar ordenar alfabeticamente pelo nome da mesorregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?orderBy=nome` (Obtém as mesorregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?view=nivelado`.

**Responses:**
- **200:** Um array de mesorregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Mesorregião por Identificador
Obtém o conjunto de mesorregiões do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/{mesorregiao}`

**Parâmetros de Path:**
- `mesorregiao*` (string, required): Um ou mais identificadores de mesorregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3301` (Obtém os dados referentes à mesorregião Noroeste Fluminense/RJ (3301)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3302|3509` (Obtém os dados referentes às mesorregiões Norte Fluminense/RJ (3302) e Marília/SP (3509)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as mesorregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da mesorregião. Se desejar ordenar alfabeticamente pelo nome da mesorregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?orderBy=nome` (Obtém as mesorregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de mesorregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Mesorregiões por Região
Obtém o conjunto de mesorregiões do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/mesorregioes`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/mesorregioes` (Obtém os dados referentes às mesorregiões da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/mesorregioes` (Obtém os dados referentes às mesorregiões das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as mesorregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da mesorregião. Se desejar ordenar alfabeticamente pelo nome da mesorregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?orderBy=nome` (Obtém as mesorregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes?view=nivelado`.

**Responses:**
- **200:** Um array de mesorregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

### Microrregiões

#### Microrregiões por UF
Obtém o conjunto de microrregiões do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/microrregioes`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/microrregioes` (Obtém os dados referentes às microrregiões do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/microrregioes` (Obtém os dados referentes às microrregiões do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as microrregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da microrregião. Se desejar ordenar alfabeticamente pelo nome da microrregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome` (Obtém as microrregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?view=nivelado`.

**Responses:**
- **200:** Um array de microrregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "mesorregiao": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Microrregiões por Mesorregião
Obtém o conjunto de microrregiões do Brasil a partir dos identificadores das mesorregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/{mesorregiao}/microrregioes`

**Parâmetros de Path:**
- `mesorregiao*` (string, required): Um ou mais identificadores de mesorregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3303/microrregioes` (Obtém os dados referentes às microrregiões da mesorregião Centro Fluminense/RJ (3303)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3303|3304/microrregioes` (Obtém os dados referentes às microrregiões das mesorregiões Centro Fluminense/RJ (3303) e Baixadas/RJ (3304)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as microrregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da microrregião. Se desejar ordenar alfabeticamente pelo nome da microrregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome` (Obtém as microrregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?view=nivelado`.

**Responses:**
- **200:** Um array de microrregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "mesorregiao": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Microrregiões
Obtém o conjunto de microrregiões do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as microrregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da microrregião. Se desejar ordenar alfabeticamente pelo nome da microrregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome` (Obtém as microrregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?view=nivelado`.

**Responses:**
- **200:** Um array de microrregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "mesorregiao": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Microrregião por Identificador
Obtém o conjunto de microrregiões do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/{microrregiao}`

**Parâmetros de Path:**
- `microrregiao*` (string, required): Um ou mais identificadores de microrregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/33007` (Obtém os dados referentes à microrregião Nova Friburgo/RJ (33007)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/31007|33007` (Obtém os dados referentes às microrregiões Montes Claros/MG (31007) e Nova Friburgo/RJ (33007)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as microrregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da microrregião. Se desejar ordenar alfabeticamente pelo nome da microrregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome` (Obtém as microrregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de microrregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "mesorregiao": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Microrregiões por Região
Obtém o conjunto de microrregiões do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/microrregioes`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/microrregioes` (Obtém os dados referentes às microrregiões da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/microrregioes` (Obtém os dados referentes às microrregiões das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as microrregiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da microrregião. Se desejar ordenar alfabeticamente pelo nome da microrregião, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?orderBy=nome` (Obtém as microrregiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes?view=nivelado`.

**Responses:**
- **200:** Um array de microrregiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "mesorregiao": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

### Municípios

#### Municípios por UF
Obtém o conjunto de municípios do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios` (Obtém os dados referentes aos municípios do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/municipios` (Obtém os dados referentes aos municípios do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios por Mesorregião
Obtém o conjunto de municípios do Brasil a partir dos identificadores das mesorregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/{mesorregiao}/municipios`

**Parâmetros de Path:**
- `mesorregiao*` (string, required): Um ou mais identificadores de mesorregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3301/municipios` (Obtém os dados referentes aos municípios da mesorregião Noroeste Fluminense/RJ (3301)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/3301|3302/municipios` (Obtém os dados referentes aos municípios das mesorregiões Noroeste Fluminense/RJ (3301) e Norte Fluminense/RJ (3302)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios por Microrregião
Obtém o conjunto de municípios do Brasil a partir dos identificadores das microrregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/{microrregiao}/municipios`

**Parâmetros de Path:**
- `microrregiao*` (string, required): Um ou mais identificadores de microrregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/33001/municipios` (Obtém os dados referentes aos municípios da microrregião Itaperuna/RJ (33001)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/33001|33005/municipios` (Obtém os dados referentes aos municípios das microrregiões Itaperuna/RJ (33001) e Três Rios/RJ (33005)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios
Obtém o conjunto de municípios do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Município por Identificador
Obtém o conjunto de municípios do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}`

**Parâmetros de Path:**
- `municipio*` (string, required): Um ou mais identificadores de municípios delimitados pelo caracter | (pipe) ou ainda um ou mais nomes de municípios seguindo o padrão de URL amigável.  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/1600303` (Obtém os dados referentes ao município de Macapá/AP (1600303)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/1600303|3201209` (Obtém os dados referentes ao município de Macapá/AP (1600303) e Cachoeiro de Itapemirim/ES (3201209)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/rio-de-janeiro|perola-doeste` (Obtém os dados referentes aos municípios de Rio de Janeiro/RJ (3304557) e Pérola d'Oeste/PR (4119004), usando a URL amigável dos municípios).  
  **obs:** Na URL amigável, use - em vez de espaços, se houver, e remova acentos, aspas e caracteres especiais.

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios por Região Imediata
Obtém o conjunto de municípios do Brasil a partir dos identificadores das regiões imediatas.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/{regiao-imediata}/municipios`

**Parâmetros de Path:**
- `regiao-imediata*` (string, required): Um ou mais identificadores de regiões imediatas delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/310055/municipios` (Obtém os dados referentes aos municípios da região imediata Uberaba/MG (310055)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/320005|320007/municipios` (Obtém os dados referentes aos municípios das regiões imediatas Colatina/ES (320005) e Cachoeiro de Itapemirim/ES (320007)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios por Região Intermediária
Obtém o conjunto de municípios do Brasil a partir dos identificadores das regiões intermediárias.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/{regiao-intermediaria}/municipios`

**Parâmetros de Path:**
- `regiao-intermediaria*` (string, required): Um ou mais identificadores de regiões intermediárias delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/5202/municipios` (Obtém os dados referentes aos municípios da região intermediária Itumbiara/GO (5202)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/5206|5105/municipios` (Obtém os dados referentes aos municípios das regiões intermediárias Luziânia - Águas Lindas de Goiás/GO (5206) e Rondonópolis/MT (5105)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

#### Municípios por Região
Obtém o conjunto de municípios do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/municipios`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/municipios` (Obtém os dados referentes aos municípios da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/municipios` (Obtém os dados referentes aos municípios das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os municípios são ordenados pela propriedade id, que corresponde ao respectivo identificador do município. Se desejar ordenar alfabeticamente pelo nome do município, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome` (Obtém os municípios ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado`.

**Responses:**
- **200:** Um array de municípios.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "microrregiao": {
        "id": 0,
        "nome": "string",
        "mesorregiao": {}
      },
      "regiao-imediata": {
        "id": 0,
        "nome": "string",
        "regiao-intermediaria": {}
      }
    }
  ]
  ```

### Países

#### Países
Obtém o conjunto de países.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/paises`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os países são ordenados pela propriedade id, aqui representado pelo identificador M49. Se desejar ordenar alfabeticamente pelo nome do país, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome` (Obtém os países ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/paises?view=nivelado`.
- `lang` (string): Linguagem dos nomes.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/paises?lang=ES` (Obtém os dados dos países em língua espanhola).

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de países.  
  **Schema:**
  ```json
  [
    {
      "id": {
        "M49": 0,
        "ISO-ALPHA-2": "string",
        "ISO-ALPHA-3": "string"
      },
      "nome": "string",
      "regiao-intermediaria": {
        "id": {},
        "nome": "string",
        "sub-regiao": {
          "id": {},
          "nome": "string",
          "regiao": {}
        }
      }
    }
  ]
  ```

### Regiões

#### Regiões
Obtém o conjunto de regiões do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região. Se desejar ordenar alfabeticamente pelo nome da região, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome` (Obtém as regiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes?view=nivelado`.

**Responses:**
- **200:** Array de regiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "sigla": "string"
    }
  ]
  ```

#### Região por Identificador
Obtém o conjunto de regiões do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1` (Obtém os dados referentes à região Norte (1)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5` (Obtém os dados referentes às regiões Norte (1), Nordeste (2), Sudeste (3), Sul (4) e Centro-Oeste (5)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região. Se desejar ordenar alfabeticamente pelo nome da região, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome` (Obtém as regiões ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de regiões.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "sigla": "string"
    }
  ]
  ```

### Regiões Imediatas

#### Regiões Imediatas por UF
Obtém o conjunto de regiões imediatas do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/regioes-imediatas`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/regioes-imediatas` (Obtém os dados referentes às regiões imediatas do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/regioes-imediatas` (Obtém os dados referentes às regiões imediatas do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões imediatas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região imediata. Se desejar ordenar alfabeticamente pelo nome da região imediata, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?orderBy=nome` (Obtém as regiões imediatas ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?view=nivelado`.

**Responses:**
- **200:** Um array de regiões imediatas.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "regiao-intermediaria": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Regiões Imediatas
Obtém o conjunto de regiões imediatas do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões imediatas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região imediata. Se desejar ordenar alfabeticamente pelo nome da região imediata, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?orderBy=nome` (Obtém as regiões imediatas ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?view=nivelado`.

**Responses:**
- **200:** Um array de regiões imediatas.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "regiao-intermediaria": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Regiões Imediatas por Identificador
Obtém o conjunto de regiões imediatas do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/{regiao-imediata}`

**Parâmetros de Path:**
- `regiao-imediata*` (string, required): Um ou mais identificadores de regiões imediatas delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/170008` (Obtém os dados referentes à região imediata Tocantinópolis/TO (170008)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/240011|240010` (Obtém os dados referentes às regiões imediatas Açu/RN (240011) e Pau dos Ferros/RN (240010)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões imediatas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região imediata. Se desejar ordenar alfabeticamente pelo nome da região imediata, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?orderBy=nome` (Obtém as regiões imediatas ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de regiões imediatas.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "regiao-intermediaria": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Regiões Imediatas por Regiões Intermediárias
Obtém o conjunto de regiões imediatas do Brasil a partir dos identificadores das regiões intermediárias.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/{regiao-intermediaria}/regioes-imediatas`

**Parâmetros de Path:**
- `regiao-intermediaria*` (string, required): Um ou mais identificadores de regiões intermediárias delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/2203/regioes-imediatas` (Obtém os dados referentes às regiões imediatas da região intermediária Picos/PI (2203)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/2202|2203/regioes-imediatas` (Obtém os dados referentes às regiões imediatas das regiões intermediárias Parnaíba/PI (2202) e Picos/PI (2203)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões imediatas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região imediata. Se desejar ordenar alfabeticamente pelo nome da região imediata, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?orderBy=nome` (Obtém as regiões imediatas ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?view=nivelado`.

**Responses:**
- **200:** Um array de regiões imediatas.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "regiao-intermediaria": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

#### Regiões Imediatas por Região
Obtém o conjunto de regiões imediatas do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/regioes-imediatas`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/regioes-imediatas` (Obtém os dados referentes às regiões imediatas da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/regioes-imediatas` (Obtém os dados referentes às regiões imediatas das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões imediatas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região imediata. Se desejar ordenar alfabeticamente pelo nome da região imediata, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?orderBy=nome` (Obtém as regiões imediatas ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas?view=nivelado`.

**Responses:**
- **200:** Um array de regiões imediatas.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "regiao-intermediaria": {
        "id": 0,
        "nome": "string",
        "UF": {}
      }
    }
  ]
  ```

### Regiões Integradas de Desenvolvimento

#### Regiões Integradas de Desenvolvimento
Obtém o conjunto de regiões integradas de desenvolvimento do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões integradas de desenvolvimento são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região integrada de desenvolvimento. Se desejar ordenar alfabeticamente pelo nome da região integrada de desenvolvimento, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento?orderBy=nome` (Obtém as regiões integradas de desenvolvimento ordenadas alfabeticamente pelo nome).
- `municipio` (string): Se desejar saber à qual região integrada de desenvolvimento um determinado município pertence, informe o parâmetro municipio com o respectivo identificador.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento?municipio=2611101` (Obtém os dados referentes à região integrada de desenvolvimento do município de Petrolina/PE (2611101)).

**Responses:**
- **200:** Um array de regiões integradas de desenvolvimento.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "municipios": [
        {}
      ]
    }
  ]
  ```

#### Regiões Integradas de Desenvolvimento por Identificador
Obtém o conjunto de regiões integradas de desenvolvimento a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento/{regiao-integrada-de-desenvolvimento}`

**Parâmetros de Path:**
- `regiao-integrada-de-desenvolvimento*` (string, required): Um ou mais identificadores de regiões integradas de desenvolvimento delimitados pelo caracter | (pipe).  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento/07801` (Obtém os dados referentes à região integrada de desenvolvimento do Distrito Federal e Entorno (07801)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões integradas de desenvolvimento são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região integrada de desenvolvimento. Se desejar ordenar alfabeticamente pelo nome da região integrada de desenvolvimento, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-integradas-de-desenvolvimento?orderBy=nome` (Obtém as regiões integradas de desenvolvimento ordenadas alfabeticamente pelo nome).

**Responses:**
- **200:** Um array de regiões integradas de desenvolvimento.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "municipios": [
        {}
      ]
    }
  ]
  ```

### Regiões Intermediárias

#### Regiões Intermediárias por UF
Obtém o conjunto de regiões intermediárias do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/regioes-intermediarias`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/regioes-intermediarias` (Obtém os dados referentes às regiões intermediárias do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/regioes-intermediarias` (Obtém os dados referentes às regiões intermediárias do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões intermediárias são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região intermediária. Se desejar ordenar alfabeticamente pelo nome da região intermediária, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?orderBy=nome` (Obtém as regiões intermediárias ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?view=nivelado`.

**Responses:**
- **200:** Um array de regiões intermediárias.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Regiões Intermediárias
Obtém o conjunto de regiões intermediárias do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões intermediárias são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região intermediária. Se desejar ordenar alfabeticamente pelo nome da região intermediária, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?orderBy=nome` (Obtém as regiões intermediárias ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?view=nivelado`.

**Responses:**
- **200:** Um array de regiões intermediárias.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Região Intermediária por Identificador
Obtém o conjunto de regiões intermediárias do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/{regiao-intermediaria}`

**Parâmetros de Path:**
- `regiao-intermediaria*` (string, required): Um ou mais identificadores de regiões intermediárias delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/1102` (Obtém os dados referentes à região intermediária Ji-Paraná/RO (1102)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/1302|2204` (Obtém os dados referentes às regiões intermediárias Tefé/AM (1302) e São Raimundo Nonato/PI (2204)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões intermediárias são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região intermediária. Se desejar ordenar alfabeticamente pelo nome da região intermediária, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?orderBy=nome` (Obtém as regiões intermediárias ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de regiões intermediárias.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

#### Regiões Intermediárias por Região
Obtém o conjunto de regiões intermediárias do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/regioes-intermediarias`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/regioes-intermediarias` (Obtém os dados referentes às regiões intermediárias da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/regioes-intermediarias` (Obtém os dados referentes às regiões intermediárias das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões intermediárias são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região intermediária. Se desejar ordenar alfabeticamente pelo nome da região intermediária, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?orderBy=nome` (Obtém as regiões intermediárias ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias?view=nivelado`.

**Responses:**
- **200:** Um array de regiões intermediárias.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      }
    }
  ]
  ```

### Regiões Metropolitanas

#### Regiões Metropolitanas por UF
Obtém o conjunto de regiões metropolitanas do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/regioes-metropolitanas`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/regioes-metropolitanas` (Obtém os dados referentes às regiões metropolitanas do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/regioes-metropolitanas` (Obtém os dados referentes às regiões metropolitanas do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões metropolitanas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região metropolitana. Se desejar ordenar alfabeticamente pelo nome da região metropolitana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas?orderBy=nome` (Obtém as regiões metropolitanas ordenadas alfabeticamente pelo nome).

**Responses:**
- **200:** Um array de regiões metropolitanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      },
      "sub-regioes-metropolitanas": [
        {}
      ],
      "municipios": [
        {}
      ]
    }
  ]
  ```

#### Regiões Metropolitanas por Região
Obtém o conjunto de regiões metropolitanas do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/regioes-metropolitanas`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/regioes-metropolitanas` (Obtém os dados referentes às regiões metropolitanas da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/regioes-metropolitanas` (Obtém os dados referentes às regiões metropolitanas das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões metropolitanas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região metropolitana. Se desejar ordenar alfabeticamente pelo nome da região metropolitana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas?orderBy=nome` (Obtém as regiões metropolitanas ordenadas alfabeticamente pelo nome).

**Responses:**
- **200:** Um array de regiões metropolitanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      },
      "sub-regioes-metropolitanas": [
        {}
      ],
      "municipios": [
        {}
      ]
    }
  ]
  ```

#### Regiões Metropolitanas
Obtém o conjunto de regiões metropolitanas do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões metropolitanas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região metropolitana. Se desejar ordenar alfabeticamente pelo nome da região metropolitana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas?orderBy=nome` (Obtém as regiões metropolitanas ordenadas alfabeticamente pelo nome).
- `municipio` (string): Se desejar saber à qual região metropolitana um determinado município pertence, informe o parâmetro municipio com o respectivo identificador.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas?municipio=4204202` (Obtém os dados referentes à região metropolitana do município de Chapecó/SC (4204202)).

**Responses:**
- **200:** Um array de regiões metropolitanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      },
      "sub-regioes-metropolitanas": [
        {}
      ],
      "municipios": [
        {}
      ]
    }
  ]
  ```

#### Regiões Metropolitanas por Identificador
Obtém o conjunto de regiões metropolitanas a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas/{regiao-metropolitana}`

**Parâmetros de Path:**
- `regiao-metropolitana*` (string, required): Um ou mais identificadores de regiões metropolitanas delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas/00201` (Obtém os dados referentes à região metropolitana de Manaus/AM (00201)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas/00301|00601` (Obtém os dados referentes à região metropolitana da Capital/RR (00301) e região metropolitana de Belém/PA (00601)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as regiões metropolitanas são ordenadas pela propriedade id, que corresponde ao respectivo identificador da região metropolitana. Se desejar ordenar alfabeticamente pelo nome da região metropolitana, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-metropolitanas?orderBy=nome` (Obtém as regiões metropolitanas ordenadas alfabeticamente pelo nome).

**Responses:**
- **200:** Um array de regiões metropolitanas.  
  **Schema:**
  ```json
  [
    {
      "id": "string",
      "nome": "string",
      "UF": {
        "id": 0,
        "nome": "string",
        "sigla": "string",
        "regiao": {}
      },
      "sub-regioes-metropolitanas": [
        {}
      ],
      "municipios": [
        {}
      ]
    }
  ]
  ```

### Subdistritos

#### Subdistritos por Distrito
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores dos distritos.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/distritos/{distrito}/subdistritos`

**Parâmetros de Path:**
- `distrito*` (string, required): Um ou mais identificadores de distritos delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/distritos/110020505/subdistritos` (Obtém os dados referentes aos subdistritos do distrito de Porto Velho/RO (110020505)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/distritos/110020505|130260305/subdistritos` (Obtém os dados referentes aos subdistritos dos distritos de Porto Velho/RO (110020505) e Manaus/AM (130260305)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por UF
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores das Unidades da Federação.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/subdistritos`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/subdistritos` (Obtém os dados referentes aos subdistritos do Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/subdistritos` (Obtém os dados referentes aos subdistritos do Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Mesorregião
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores das mesorregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/{mesorregiao}/subdistritos`

**Parâmetros de Path:**
- `mesorregiao*` (string, required): Um ou mais identificadores de mesorregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/4305/subdistritos` (Obtém os dados referentes aos subdistritos da mesorregião Metropolitana de Porto Alegre/RS (4305)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/4305|5203/subdistritos` (Obtém os dados referentes aos subdistritos das mesorregiões Metropolitana de Porto Alegre/RS (4305) e Centro Goiano/GO (5203)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Microrregião
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores das microrregiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/{microrregiao}/subdistritos`

**Parâmetros de Path:**
- `microrregiao*` (string, required): Um ou mais identificadores de microrregiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/11001/subdistritos` (Obtém os dados referentes aos subdistritos da microrregião Porto Velho/RO (11001)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/11001|43029/subdistritos` (Obtém os dados referentes aos subdistritos das microrregiões Porto Velho/RO (11001) e Campanha Ocidental/RS (43029)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertenecem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Município
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores dos municípios.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/subdistritos`

**Parâmetros de Path:**
- `municipio*` (string, required): Um ou mais identificadores de municípios delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3304557/subdistritos` (Obtém os dados referentes aos subdistritos do município de Rio de Janeiro/RJ (3304557)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3304557|3305208/subdistritos` (Obtém os dados referentes aos subdistritos dos municípios de Rio de Janeiro/RJ (3304557) e São Pedro da Aldeia/RJ (3305208)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Região Imediata
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores das regiões imediatas.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/{regiao-imediata}/subdistritos`

**Parâmetros de Path:**
- `regiao-imediata*` (string, required): Um ou mais identificadores de regiões imediatas delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/230007/subdistritos` (Obtém os dados referentes aos subdistritos da região imediata Russas - Limoeiro do Norte/CE (230007)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/230010|230006/subdistritos` (Obtém os dados referentes aos subdistritos das regiões imediatas Icó/CE (230010) e Quixadá/CE (230006)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Região
Obtém o conjunto de subdistritos do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/subdistritos`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/subdistritos` (Obtém os dados referentes aos subdistritos da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/subdistritos` (Obtém os dados referentes aos subdistritos das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertencem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos
Obtém o conjunto de subdistritos do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

#### Subdistritos por Identificador
Obtém o conjunto de subdistritos do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos/{id}`

**Parâmetros de Path:**
- `id*` (string, required): Um ou mais identificadores de subdistritos delimitados pelo caracter | (pipe).  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos/53001080517` (Obtém os dados referentes ao subdistrito de Cruzeiro/DF (53001080517)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, os subdistritos são ordenados pelo nome do município ao qual pertenecem. Se desejar ordenar alfabeticamente pelo nome do subdistrito, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome` (Obtém os subdistritos ordenados alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?view=nivelado`.

**Responses:**
- **200:** Um array de subdistritos.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "distrito": {
        "id": 0,
        "nome": "string",
        "municipio": {}
      }
    }
  ]
  ```

### Unidades da Federação (UFs)

#### UFs
Obtém o conjunto de Unidades da Federação do Brasil.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados`

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as Unidades da Federação (estados) são ordenadas pela propriedade id, que corresponde ao respectivo identificador da Unidade da Federação. Se desejar ordenar alfabeticamente pelo nome da Unidade da Federação, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome` (Obtém as Unidades da Federação (estados) ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado`.

**Responses:**
- **200:** Array de Unidades da Federação.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "sigla": "string",
      "regiao": {
        "id": 0,
        "nome": "string",
        "sigla": "string"
      }
    }
  ]
  ```

#### UF por Identificador
Obtém o conjunto de Unidades da Federação do Brasil a partir dos respectivos identificadores.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}`

**Parâmetros de Path:**
- `UF*` (string, required): Um ou mais identificadores de Unidades da Federação delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33` (Obtém os dados referentes ao Rio de Janeiro (33)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35` (Obtém os dados referentes ao Rio de Janeiro (33) e São Paulo (35)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as Unidades da Federação (estados) são ordenadas pela propriedade id, que corresponde ao respectivo identificador da Unidade da Federação. Se desejar ordenar alfabeticamente pelo nome da Unidade da Federação, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome` (Obtém as Unidades da Federação (estados) ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado`.

**Responses:**
- **200:** Um objeto (caso apenas um identificador seja informado) ou um array de Unidades da Federação.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "sigla": "string",
      "regiao": {
        "id": 0,
        "nome": "string",
        "sigla": "string"
      }
    }
  ]
  ```

#### UFs por Região
Obtém o conjunto de Unidades da Federação do Brasil a partir dos identificadores das regiões.

**URL:** `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/estados`

**Parâmetros de Path:**
- `macrorregiao*` (string, required): Um ou mais identificadores de regiões delimitados pelo caracter | (pipe).  
  Exemplos:  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/estados` (Obtém os dados referentes às Unidades da Federação da região Sudeste (3)).  
  - `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3|4/estados` (Obtém os dados referentes às Unidades da Federação das regiões Sudeste (3) e Sul (4)).

**Parâmetros de Query:**
- `orderBy` (string): Por padrão, as Unidades da Federação (estados) são ordenadas pela propriedade id, que corresponde ao respectivo identificador da Unidade da Federação. Se desejar ordenar alfabeticamente pelo nome da Unidade da Federação, use o parâmetro orderBy com o valor nome.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome` (Obtém as Unidades da Federação (estados) ordenadas alfabeticamente pelo nome).
- `view` (string): Modo de visualização. Por padrão, a resposta JSON é configurada para refletir a hierarquia à qual pertencem as localidades. A outra opção é configurar o parâmetro view com o valor nivelado, que faz com que as localidades sejam renderizadas no mesmo nível.  
  Exemplo: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado`.

**Responses:**
- **200:** Um array de Unidades da Federação.  
  **Schema:**
  ```json
  [
    {
      "id": 0,
      "nome": "string",
      "sigla": "string",
      "regiao": {
        "id": 0,
        "nome": "string",
        "sigla": "string"
      }
    }
  ]
  ```