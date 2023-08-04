export const useFetch = async (character, comicActivate, comicSearch) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz3";
  const personajeIndex = Math.floor(Math.random() * alphabet.length);
  const personajeRandom = alphabet[personajeIndex];
  console.log(comicActivate);
  if (comicActivate) {
    if (comicSearch) {
      let urlComic = `https://gateway.marvel.com:443/v1/public/comics?format=comic&ts=1&titleStartsWith=${comicSearch}&format=comic&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276`;
      const req = await fetch(urlComic);
      const data = await req.json();
      return data;
    } else {
      let urlComic =
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276";
      const req = await fetch(urlComic);
      const data = await req.json();
      return data;
    }
  }
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
