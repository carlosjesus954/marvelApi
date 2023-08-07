import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Description = () => {
  const { descriptionPersonaje } = useContext(AuthContext);
  // console.log(descriptionPersonaje);
  return (
    <section className="Description">
      <article className="Description-article">
        <img src={descriptionPersonaje.img} alt={descriptionPersonaje.name} />
      </article>
    </section>
  );
};
