export default async function fetcher(endpoint: string, config?: RequestInit) {
  const request = await fetch(
    `${process.env.EXPO_PUBLIC_API_BASE_URL}${endpoint}`,
    config
  );

  const response = await request.json();

  return response;
}
