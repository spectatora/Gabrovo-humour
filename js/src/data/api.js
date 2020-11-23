import useSWR from 'swr';
// import apiFetchMock from './api-mock';

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

export function useJokes(
  page = 1,
  limit = PER_PAGE,
  order = 'created',
  orderDirection = 'asc',
) {
  // construct query parameters
  const parameters = {
    itemsPerPage: limit.toString(),
    orderBy: order,
  };
  if (order !== 'random') {
    parameters.currentPage = page.toString();
    parameters.orderByDirection = orderDirection;
  }

  // construct the url
  const url = '/jokes?' + new URLSearchParams(parameters).toString();

  const { data, error, ...state } = useSWR(url, apiFetch, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    loading: !error && !data,
    jokes: data ? data.items : [],
    total: data ? data.totalItems : 0,
    error,
    ...state,
  };
}
