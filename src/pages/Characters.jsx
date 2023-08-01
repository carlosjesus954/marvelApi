import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Characters = () => {
  const { personajes } = useContext(AuthContext);
  return (
    <section className="Characters Wrapper">
      <div className="Characters-global">
        {personajes &&
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
