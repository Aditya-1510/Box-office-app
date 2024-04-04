const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(querString) {
  const response = await fetch(`${API_BASE_URL}${querString}`).then(r =>
    r.json()
  );

  return response;
}
