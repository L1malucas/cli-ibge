import { ApiModule } from '../types/api';

export const aglomeracoesUrbanasModule: ApiModule = {
  name: "Aglomerações Urbanas",
  description: "Obtém o conjunto de aglomerações urbanas do Brasil.",
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
