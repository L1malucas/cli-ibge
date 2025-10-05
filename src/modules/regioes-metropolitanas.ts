import { ApiModule } from '../types/api';

export const regioesMetropolitanasModule: ApiModule = {
  name: "Regiões Metropolitanas",
  endpoints: [
    {
      summary: "Listar todas as regiões metropolitanas",
      description: "Obtém o conjunto de todas as regiões metropolitanas do Brasil.",
      method: "GET",
      path: "/regioes-metropolitanas",
      parameters: []
    }
  ]
};
