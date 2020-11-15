import jokes from './jokes.json';

const RESPONSE_DELAY = 2000; // 2 sec
const ERROR_RATE = 0.3; // 30%
// const ERROR_RATE = 1;

// mock API communication
async function apiFetch(success) {
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
export function getJokes() {
  return apiFetch(() =>
    jokes.slice(0, 10).map(({ title, joke }) => ({
      title,
      content: joke.split('\n'),
    })),
  );
}
