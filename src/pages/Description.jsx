import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
// import { useComicsById } from "../hooks/useComicsById";

export const Description = () => {
  const { descriptionPersonaje, useComicsId, getComicsById } =
    useContext(AuthContext);
  const id = descriptionPersonaje.id;

  useEffect(() => {
    getComicsById(id);
  }, []);
  console.log(useComicsId);
  return (
    <section className="Description">
      <article className="Description-global">
        <div className="Description-cards">
          <img
            src={descriptionPersonaje.img}
            alt={descriptionPersonaje.name}
            className="Description-img"
          />
          <h1 className="Description-title">{descriptionPersonaje.name}</h1>
        </div>
        <div className="Description-comics">
          <h2 className="Description-h2">Comics</h2>

          {useComicsId.map((ele) => {
            const { extension, path } = ele.thumbnail;
            const img = `${path}.${extension}`;
            return (
              <div className="Description-cards" key={ele.id}>
                <img src={img} alt={ele.title} className="Description-img" />
                <h1 className="Description-title">{ele.title}</h1>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
