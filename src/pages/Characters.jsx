import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const Characters = () => {
  const {
    personajes,
    comics,
    comicActivate,
    pushPersonajeDescription,
    onAddFavoritosCards,
    onDeleteFavoritosCards,
    favoritoActivoCard,
  } = useContext(AuthContext);

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
              const img = `${path}.${extension}`;
              const title = ele.title;
              const id = ele.id;
              return (
                <div className="Characters-cards" key={ele.id}>
                  <div className="Characters-star">
                    {favoritoActivoCard[ele.id] ? (
                      <svg
                        fillRule="currentColor"
                        className="Characters-icon"
                        viewBox="0 0 16 16"
                        onClick={() => onDeleteFavoritosCards(id)}
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="currentColor"
                        className="Characters-icon"
                        viewBox="0 0 16 16"
                        onClick={() => onAddFavoritosCards({ id, title, img })}
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    )}
                  </div>

                  <img
                    src={`${path}.${extension}`}
                    alt={title}
                    className="Characters-img"
                  />
                  <h2 className="Characters-h2">{title}</h2>
                  <NavLink
                    to={"description"}
                    className="Characters-info"
                    onClick={() =>
                      descriptionValuePersonajes({ title, img, id })
                    }
                  >
                    Ver más
                  </NavLink>
                </div>
              );
            })
          : personajes &&
            personajes.map((ele) => {
              const { extension, path } = ele.thumbnail;
              const img = `${path}.${extension}`;
              const id = ele.id;
              const name = ele.name;

              return (
                <div className="Characters-cards" key={ele.id}>
                  <div className="Characters-star">
                    {favoritoActivoCard[id] ? (
                      <svg
                        fillRule="currentColor"
                        className="Characters-icon"
                        viewBox="0 0 16 16"
                        onClick={() => onDeleteFavoritosCards(id)}
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="currentColor"
                        className="Characters-icon"
                        viewBox="0 0 16 16"
                        onClick={() => onAddFavoritosCards({ id, name, img })}
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    )}
                  </div>
                  <img src={img} alt={name} className="Characters-img" />
                  <h2 className="Characters-h2">{name}</h2>
                  <NavLink
                    to={"description"}
                    className="Characters-info"
                    onClick={() =>
                      descriptionValuePersonajes({ name, img, id })
                    }
                  >
                    Ver más
                  </NavLink>
                </div>
              );
            })}
      </div>
    </section>
  );
};
