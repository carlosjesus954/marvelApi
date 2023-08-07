import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Description } from "./Description";

export const Characters = () => {
  const { personajes, comics, comicActivate } = useContext(AuthContext);
  return (
    <section className="Characters Wrapper">
      <div className="Characters-global">
        {comicActivate
          ? comics &&
            comics.map((ele) => {
              const { extension, path } = ele.thumbnail;
              return (
                <div className="Characters-cards" key={ele.id}>
                  <img
                    src={`${path}.${extension}`}
                    alt={ele.title}
                    className="Characters-img"
                  />
                  <h2 className="Characters-h2">{ele.title}</h2>
                </div>
              );
            })
          : personajes &&
            personajes.map((ele) => {
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
