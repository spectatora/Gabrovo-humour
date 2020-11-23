// TODO: env variable
const BASE_URL = 'http://localhost:5001/gabrovo-humour/us-central1/app/api';
const PER_PAGE = 10;

async function apiFetch(url) {
  const response = await fetch(BASE_URL + url);

  if (!response.ok) {
    // TODO: handle error message and code
    throw new Error('API error occur.');
  }

  return response.json();
}

export function getJokes(page, limit = PER_PAGE) {
  return apiFetch(
    `/jokes?currentPage=${page}&itemsPerPage=${PER_PAGE}&orderBy=created&orderByDirection=desc`,
  ).then((response) => response.items.slice(0, limit));
}

export function getJokeCount() {
  return apiFetch(
    `/jokes?currentPage=1&itemsPerPage=${PER_PAGE}&orderBy=created&orderByDirection=desc`,
  ).then((response) => response.totalItems);
}

export function getRandomJoke() {
  return apiFetch(`/jokes?itemsPerPage=1&orderBy=random`).then((response) =>
    response.items.pop(),
  );
}
