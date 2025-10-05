import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
});

export async function executeRequest(path: string, params: { [key: string]: string }) {
  let finalPath = path;

  // Substitui os parâmetros do path (ex: {UF} por 35)
  for (const key in params) {
    if (finalPath.includes(`{${key}}`)) {
      finalPath = finalPath.replace(`{${key}}`, params[key]);
    }
  }

  try {
    const response = await apiClient.get(finalPath);
    return response.data;
  } catch (error) {
    console.error(`Erro ao executar a requisição para ${finalPath}:`, error);
    return null;
  }
}
