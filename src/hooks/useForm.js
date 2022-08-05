import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Registro de los imputs
  const handleChange = () => {};

  // Aqui se analizan las verificaciones, cuando los elementos pierden el foco
  const handleBlur = () => {};

  // Envio del formulario
  const handleSubmit = () => {};

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
