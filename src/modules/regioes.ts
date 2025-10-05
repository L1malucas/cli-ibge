import { ApiModule } from '../types/api';

export const regioesModule: ApiModule = {
  name: "Regiões",
  endpoints: [
    {
      summary: "Listar todas as regiões do Brasil",
      description: "Obtém o conjunto das 5 grandes regiões do Brasil.",
      method: "GET",
      path: "/regioes",
      parameters: []
    },
    {
      summary: "Consultar uma região por ID",
      description: "Busca uma única região pelo seu código de identificação.",
      method: "GET",
      path: "/regioes/{id}",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID da região (ex: 3 para Sudeste)",
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
