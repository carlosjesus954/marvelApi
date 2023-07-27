import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Characters = () => {
  const data = useFetch();
  const personajes = data?.results || []; // Asegúrate de que "data.results" exista o usa un array vacío como valor predeterminado
  console.log(data);
  return (
    <section className="Characters Wrapper">
      <div className="Characters-global">
        {personajes.map((ele) => {
          const { extension, path } = ele.thumbnail;
          return (
            <div className="Characters-cards" key={ele.id}>
              <img
                src={`${path}.${extension}`}
                alt=""
                className="Characters-img"
              />
              <h2 className="Characters-h2">{ele.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};
