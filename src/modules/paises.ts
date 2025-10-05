import { ApiModule } from '../types/api';

export const paisesModule: ApiModule = {
  name: "Países",
  description: "Obtém o conjunto de países.",
  endpoints: [
    {
      summary: "Listar todos os países",
      description: "Obtém o conjunto de todos os países do mundo.",
      method: "GET",
      path: "/paises",
      parameters: [
        {
          name: "orderBy",
          in: "query",
          description: "ordenar por nome (opcional)",
          required: false
        }
      ]
    },
    {
      summary: "Consultar um país por ID",
      description: "Busca um único país pelo seu código de identificação M49.",
      method: "GET",
      path: "/paises/{pais}",
      parameters: [
        {
          name: "pais",
          in: "path",
          description: "ID M49 do país (ex: 76 para Brasil)",
          required: true,
          source: {
            endpoint: "/paises?orderBy=nome",
            valueField: "id.M49",
            displayField: "nome"
          }
        }
      ]
    }
  ]
};
