import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


const handleChange = () => {};
const handleBlur = () => {};
const handleSubmit = () => {};


};
