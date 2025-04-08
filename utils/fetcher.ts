import { API_BASE_URL } from './API';

export default async function fetcher(endpoint: string, config?: RequestInit) {
  const request = await fetch(`${API_BASE_URL}${endpoint}`, config);

  const response = await request.json();

  return response;
}
