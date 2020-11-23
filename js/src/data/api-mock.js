import jokes from './jokes.json';

export default async function apiFetchMock(url) {
  const RESPONSE_DELAY = 1000; // 2 sec
  const ERROR_RATE = 0.3; // 30%
  console.debug(`fetch ${url}`);

  // error rate
  if (Math.random() <= ERROR_RATE) {
    throw new Error('API error occur.');
  }

  // response delay
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          items: jokes.slice(0, 10).map(({ title, joke }) => ({
            title,
            content: joke.split('\n'),
          })),
          totalItems: jokes.length,
        }),
      RESPONSE_DELAY,
    ),
  );
}
