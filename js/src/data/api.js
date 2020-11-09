// Use the Fetch API & ES6
// fetch('data/sources.json')
// .then(response => response.json())
// .then(data => {
//     // Do something with your data
//     console.log(data);
// });

import jokes from './jokes.json';

// TODO: fetch jokes through API
export async function getJokes() {
  return jokes.slice(0, 10).map(({ title, joke }) => ({
    title,
    content: joke.split('\n'),
  }));
}
