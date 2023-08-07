import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Characters = () => {
  const { personajes, comics, comicActivate, pushPersonajeDescription } =
    useContext(AuthContext);

  const descriptionValuePersonajes = (name, img, id) => {
    console.log("Aqui esta en la funcion, ", name, img, id);
    pushPersonajeDescription({ name, img, id });
  };
  return (
    <section className="Characters Wrapper">
      <div className="Characters-global">
        {comicActivate
          ? comics &&
            comics.map((ele) => {
              const { extension, path } = ele.thumbnail;
              return (
                <NavLink
                  className="Characters-cards"
                  key={ele.id}
                  to={"description"}
                >
                  <img
                    src={`${path}.${extension}`}
                    alt={ele.title}
                    className="Characters-img"
                  />
                  <h2 className="Characters-h2">{ele.title}</h2>
                </NavLink>
              );
            })
          : personajes &&
            personajes.map((ele) => {
              const { extension, path } = ele.thumbnail;
              const img = `${path}.${extension}`;
              return (
                <NavLink
                  className="Characters-cards"
                  key={ele.id}
                  to={"description"}
                  onClick={() =>
                    descriptionValuePersonajes(ele.name, img, ele.id)
                  }
                >
                  <img src={img} alt={ele.name} className="Characters-img" />
                  <h2 className="Characters-h2">{ele.name}</h2>
                </NavLink>
              );
            })}
      </div>
    </section>
  );
};
