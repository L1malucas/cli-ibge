import { ApiModule } from '../types/api';

export const regioesIntermediariasModule: ApiModule = {
  name: "Regiões Intermediárias",
  endpoints: [
    {
      summary: "Listar todas as regiões intermediárias",
      description: "Obtém o conjunto de todas as regiões intermediárias do Brasil.",
      method: "GET",
      path: "/regioes-intermediarias",
      parameters: []
    }
  ]
};
