import { ApiModule } from '../types/api';

export const subdistritosModule: ApiModule = {
  name: "Subdistritos",
  endpoints: [
    {
      summary: "Listar todos os subdistritos",
      description: "Obtém o conjunto de todos os subdistritos do Brasil.",
      method: "GET",
      path: "/subdistritos",
      parameters: []
    },
    {
      summary: "Consultar subdistrito por ID",
      description: "Busca um ou mais subdistritos por ID.",
      method: "GET",
      path: "/subdistritos/{id}",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do subdistrito",
          required: true,
          source: {
            endpoint: "/subdistritos?orderBy=nome",
            valueField: "id",
            displayField: "nome"
          }
        }
      ]
    },
    {
      summary: "Listar subdistritos por UF",
      description: "Busca subdistritos por uma ou mais UFs.",
      method: "GET",
      path: "/estados/{UF}/subdistritos",
      parameters: [
        {
          name: "UF",
          in: "path",
          description: "ID da UF",
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
