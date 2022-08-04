import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {};
const validationsForm = (form) => {};

const ContactForm = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return <div>ContactForm</div>;
};

export default ContactForm;
