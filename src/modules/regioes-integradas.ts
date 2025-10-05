import { ApiModule } from '../types/api';

export const regioesIntegradasModule: ApiModule = {
  name: "Regiões Integradas de Desenvolvimento",
  endpoints: [
    {
      summary: "Listar todas as Regiões Integradas de Desenvolvimento",
      description: "Obtém o conjunto de todas as RIDE do Brasil.",
      method: "GET",
      path: "/regioes-integradas-de-desenvolvimento",
      parameters: []
    }
  ]
};
