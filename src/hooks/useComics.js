export const useComics = async (search) => {
  if (search) {
    let urlComic = `https://gateway.marvel.com:443/v1/public/comics?format=comic&titleStartsWith=${search}&apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276&ts=1`;
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
};
