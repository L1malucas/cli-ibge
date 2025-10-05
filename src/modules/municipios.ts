import { ApiModule } from '../types/api';

export const municipiosModule: ApiModule = {
  name: "Municípios",
  description: "Obtém o conjunto de municípios do Brasil.",
  endpoints: [
    {
      summary: "Listar todos os municípios",
      description: "Retorna a lista completa de municípios do Brasil.",
      method: "GET",
      path: "/municipios",
      parameters: []
    },
    {
      summary: "Listar municípios por UF",
      description: "Retorna a lista de municípios para uma determinada Unidade da Federação (UF).",
      method: "GET",
      path: "/estados/{UF}/municipios",
      parameters: [
        {
          name: "UF",
          in: "path",
          description: "Sigla da Unidade da Federação (ex: SP, RJ, BA)",
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
