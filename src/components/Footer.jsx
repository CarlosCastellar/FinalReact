import React from "react";
import { useGlobalStatesContext } from "../context/DataContext";
function Footer() {
  const { theme } = useGlobalStatesContext();
  console.log(theme);
  return (
    <footer className={`${theme.color}`}>
      <div>
        <p>Derechos de autor © 2023 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
