import { useState } from "react";
import { helpHttp } from "./helpHttp";
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //actualiza la variable de estado de los errores
    setErrors(validateForm(form));
    //se valida que el objeto de errores se encuentra vacio
    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      //restablezco la variable loading a true para comenzar a cargar el loader y hacer la peticion
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/ngomeznicolas89@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
