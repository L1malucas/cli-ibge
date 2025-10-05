import { ApiModule } from '../types/api';

export const microrregioesModule: ApiModule = {
  name: "Microrregiões",
  description: "Obtém o conjunto de microrregiões do Brasil.",
  endpoints: [
    {
      summary: "Listar todas as microrregiões",
      description: "Obtém o conjunto de todas as microrregiões do Brasil.",
      method: "GET",
      path: "/microrregioes",
      parameters: []
    },
    {
      summary: "Consultar microrregião por ID",
      description: "Busca uma ou mais microrregiões por ID.",
      method: "GET",
      path: "/microrregioes/{id}",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID da microrregião",
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
      summary: "Listar microrregiões por UF",
      description: "Busca microrregiões por uma ou mais UFs.",
      method: "GET",
      path: "/estados/{UF}/microrregioes",
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
      summary: "Listar microrregiões por Mesorregião",
      description: "Busca microrregiões por uma ou mais Mesorregiões.",
      method: "GET",
      path: "/mesorregioes/{mesorregiao}/microrregioes",
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
    }
  ]
};
