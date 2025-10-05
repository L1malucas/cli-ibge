import { ApiModule } from '../types/api';

export const ufsModule: ApiModule = {
  name: "Unidades da Federação (UFs)",
  description: "Obtém o conjunto de Unidades da Federação do Brasil.",
  endpoints: [
    {
      summary: "Listar todas as Unidades da Federação",
      description: "Obtém o conjunto de todas as UFs do Brasil.",
      method: "GET",
      path: "/estados",
      parameters: []
    },
    {
      summary: "Consultar UF por ID",
      description: "Busca uma ou mais UFs por ID.",
      method: "GET",
      path: "/estados/{id}",
      parameters: [
        {
          name: "id",
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
      summary: "Listar UFs por Região",
      description: "Busca UFs por uma ou mais Regiões.",
      method: "GET",
      path: "/regioes/{macrorregiao}/estados",
      parameters: [
        {
          name: "macrorregiao",
          in: "path",
          description: "ID da Região",
          required: true,
          source: {
            endpoint: "/regioes",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    }
  ]
};
