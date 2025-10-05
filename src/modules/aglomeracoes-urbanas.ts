import { ApiModule } from '../types/api';

export const aglomeracoesUrbanasModule: ApiModule = {
  name: "Aglomerações Urbanas",
  endpoints: [
    {
      summary: "Listar todas as aglomerações urbanas",
      description: "Obtém o conjunto de todas as aglomerações urbanas do Brasil.",
      method: "GET",
      path: "/aglomeracoes-urbanas",
      parameters: []
    }
  ]
};
