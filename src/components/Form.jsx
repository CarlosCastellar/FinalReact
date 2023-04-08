import { useState } from "react";

const Form = () => {
  const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (newUser) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const error = { nombreError: "", emailError: "" };

    if (!newUser.nombre || newUser.nombre.length < 5) {
      error.nombreError =
        "El nombre es requerido y debe tener al menos 5 caracteres";
    }

    if (!newUser.email || !emailRegex.test(newUser.email)) {
      error.emailError = "El email debe ser válido";
    }

    if (error.nombreError || error.emailError) {
      setErrors(error);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(newUser);

    if (!isValid) {
      return;
    }
    alert(`Gracias ${newUser.nombre}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div className="formulario">
      <form>
        <input
          className={errors.nombreError ? "inputError" : ""}
          name="nombre"
          type="text"
          placeholder="Nombre"
          onChange={handleInputChange}
          required
        />
        {errors.nombreError && <label>{errors.nombreError}</label>}
        <input
          className={errors.emailError ? "inputError" : ""}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        {errors.emailError && <label>{errors.emailError}</label>}
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
