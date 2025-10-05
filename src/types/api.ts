export interface ApiParameter {
  name: string;
  in: 'path' | 'query';
  description: string;
  required: boolean;
  source?: {
    endpoint: string;
    valueField: string;
    displayField: string;
  };
}

export interface ApiEndpoint {
  summary: string;
  description: string;
  method: 'GET';
  path: string;
  parameters: ApiParameter[];
}

export interface ApiModule {
  name: string;
  description?: string; // Adicionado para descrições de módulo
  endpoints: ApiEndpoint[];
}
