import React, { useState } from "react";

export const useForm = (initialValue, formValidations, handleSearchSubmit) => {
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
      handleSearchSubmit(search);
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
