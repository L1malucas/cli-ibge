import { ApiModule } from '../types/api';

export const distritosModule: ApiModule = {
  name: "Distritos",
  endpoints: [
    {
      summary: "Listar todos os distritos do Brasil",
      description: "Obtém o conjunto de todos os distritos do Brasil.",
      method: "GET",
      path: "/distritos",
      parameters: []
    },
    {
      summary: "Consultar distrito por ID",
      description: "Busca um ou mais distritos pelos seus IDs.",
      method: "GET",
      path: "/distritos/{id}",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do distrito",
          required: true,
          source: {
            endpoint: "/distritos?orderBy=nome",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    },
    {
      summary: "Listar distritos por UF",
      description: "Busca distritos de uma ou mais Unidades da Federação.",
      method: "GET",
      path: "/estados/{UF}/distritos",
      parameters: [
        {
          name: "UF",
          in: "path",
          description: "ID da UF",
          required: true,
          source: {
            endpoint: "/estados",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    },
    {
      summary: "Listar distritos por Mesorregião",
      description: "Busca distritos por uma ou mais Mesorregiões.",
      method: "GET",
      path: "/mesorregioes/{mesorregiao}/distritos",
      parameters: [
        {
          name: "mesorregiao",
          in: "path",
          description: "ID da Mesorregião",
          required: true,
          source: {
            endpoint: "/mesorregioes",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    },
    {
      summary: "Listar distritos por Microrregião",
      description: "Busca distritos por uma ou mais Microrregiões.",
      method: "GET",
      path: "/microrregioes/{microrregiao}/distritos",
      parameters: [
        {
          name: "microrregiao",
          in: "path",
          description: "ID da Microrregião",
          required: true,
          source: {
            endpoint: "/microrregioes",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    },
    {
      summary: "Listar distritos por Município",
      description: "Busca distritos por um ou mais Municípios.",
      method: "GET",
      path: "/municipios/{municipio}/distritos",
      parameters: [
        {
          name: "municipio",
          in: "path",
          description: "ID do Município",
          required: true,
          source: {
            endpoint: "/municipios",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    }
  ]
};
