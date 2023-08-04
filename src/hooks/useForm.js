import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavBar } from "../ui/NavBar";

export const useForm = (initialValue, formValidations, mandarSearch) => {
  const [form, setForm] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(formValidations(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(formValidations(form));

    if (Object.keys(errors).length === 0) {
      const { search } = form;
      mandarSearch(search);
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};
