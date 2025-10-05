import { ApiModule } from '../types/api';

export const regioesImediatasModule: ApiModule = {
  name: "Regiões Imediatas",
  description: "Obtém o conjunto de regiões imediatas do Brasil.",
  endpoints: [
    {
      summary: "Listar todas as regiões imediatas",
      description: "Obtém o conjunto de todas as regiões imediatas do Brasil.",
      method: "GET",
      path: "/regioes-imediatas",
      parameters: []
    }
  ]
};
