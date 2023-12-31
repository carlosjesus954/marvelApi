export const useFetch = async (character) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz3";
  const personajeIndex = Math.floor(Math.random() * alphabet.length);
  const personajeRandom = alphabet[personajeIndex];

  if (character) {
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${character}&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276`;
    const req = await fetch(url);
    const data = await req.json();
    return data;
  } else {
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${personajeRandom}&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276`;
    const req = await fetch(url);
    const data = await req.json();
    return data;
  }
};
