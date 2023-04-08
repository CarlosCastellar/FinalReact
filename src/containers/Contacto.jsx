import React from "react";
import Form from "../components/Form";
import { useGlobalStatesContext } from "../context/DataContext";

const Contact = () => {
  const { theme } = useGlobalStatesContext();

  return (
    <div className={theme.color}>
      <h1>Contacto</h1>
      <Form />
    </div>
  );
};

export default Contact;
