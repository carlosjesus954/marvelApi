import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Favoritos = () => {
  const { favoritoActivoCard, onDeleteFavoritosCards } =
    useContext(AuthContext);
  // console.log(favoritoActivoCard);
  return (
    <section className="Favoritos">
      <div className="Favoritos-global">
        {Object.keys(favoritoActivoCard).map((id) => {
          const card = favoritoActivoCard[id];
          return (
            <div className="Favoritos-card" key={id}>
              <svg
                fillRule="currentColor"
                className="Favoritos-icon"
                viewBox="0 0 16 16"
                onClick={() => onDeleteFavoritosCards(id)}
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <img src={card.img} alt={card.title} className="Favoritos-img" />
              <div className="Favoritos-name">
                <span className="Favoritos-span">{card.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
