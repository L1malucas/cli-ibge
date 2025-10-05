import { ApiModule } from '../types/api';

export const mesorregioesModule: ApiModule = {
  name: "Mesorregiões",
  endpoints: [
    {
      summary: "Listar todas as mesorregiões",
      description: "Obtém o conjunto de todas as mesorregiões do Brasil.",
      method: "GET",
      path: "/mesorregioes",
      parameters: []
    },
    {
      summary: "Consultar mesorregião por ID",
      description: "Busca uma ou mais mesorregiões por ID.",
      method: "GET",
      path: "/mesorregioes/{id}",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID da mesorregião",
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
      summary: "Listar mesorregiões por UF",
      description: "Busca mesorregiões por uma ou mais UFs.",
      method: "GET",
      path: "/estados/{UF}/mesorregioes",
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
    }
  ]
};
