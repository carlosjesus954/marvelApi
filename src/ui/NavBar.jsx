import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const NavBar = () => {
  const { comicActivate, changeComicActivate } = useContext(AuthContext);
  const initialValue = {
    search: "",
  };
  const formValidations = (form) => {
    let errors = {};
    if (!form.search.trim()) {
      errors.search = "El campo se encuentra vacío";
    }
    return errors;
  };
  const { form, handleChange, errors, handleBlur, handleSubmit } = useForm(
    initialValue,
    formValidations
  );
  useEffect(() => {
    useFetch(comicActivate);
    console.log(comicActivate);
  }, [comicActivate]);

  return (
    <header className="Header ">
      <div className="Header-global Wrapper">
        <img
          src="../../public/assets/Marvel_Logo.png"
          alt="Marvel logo"
          className="Header-logo"
        />

        <div className="Header-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="currentColor"
            className="Header-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <form
            action="#"
            method="get"
            className="Header-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              name="search"
              value={form.search}
              className="Header-input"
              placeholder="Buscar"
              required
            />

            {errors.search && <p className="Header-errors">{errors.search}</p>}
          </form>
          <div className="Header-subcontainer" onClick={changeComicActivate}>
            <span
              className={`Header-span ${
                comicActivate ? "Header-span--activate" : ""
              }`}
            >
              Buscar comics
            </span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="Header-icon"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </div>
    </header>
  );
};
