import jokes from './jokes.json';

const RESPONSE_DELAY = 2000; // 2 sec
const ERROR_RATE = 0.1; // 10%
// const ERROR_RATE = 0.3; // 30%
// const ERROR_RATE = 1; // 100%

// mock API communication
async function apiFetch(success) {
  // console.debug('fetch data.');

  // error rate
  if (Math.random() <= ERROR_RATE) {
    throw new Error('API error occur.');
  }

  // response delay
  return new Promise((resolve) =>
    setTimeout(() => resolve(success()), RESPONSE_DELAY),
  );
}

// TODO: fetch jokes through API
const PER_PAGE = 10;
export function getJokes(page) {
  return apiFetch(() =>
    jokes
      .slice((page - 1) * PER_PAGE, page * PER_PAGE)
      .map(({ title, joke }) => ({
        title,
        content: joke.split('\n'),
      })),
  );
}
