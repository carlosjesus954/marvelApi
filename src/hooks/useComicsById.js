export const useComicsById = async (id) => {
  if (id) {
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=6806045bee565cf05952dbe2eee6e9df&hash=66fa1d3509e0217997b7398ef5965276&ts=1`;
    const req = await fetch(url);
    const data = await req.json();
    return data;
  }
};
