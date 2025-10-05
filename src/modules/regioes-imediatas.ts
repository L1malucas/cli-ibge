import { ApiModule } from '../types/api';

export const regioesImediatasModule: ApiModule = {
  name: "Regiões Imediatas",
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
