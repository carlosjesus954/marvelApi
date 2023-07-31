import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Characters = () => {
  const [personajes, setPersonajes] = useState([]);

  const d = useFetch();
  setPersonajes(d);

  return (
    <section className="Characters Wrapper">
      <div className="Characters-global">
        {personajes.map((ele) => {
          const { extension, path } = ele.thumbnail;
          return (
            <div className="Characters-cards" key={ele.id}>
              <img
                src={`${path}.${extension}`}
                alt={ele.name}
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
