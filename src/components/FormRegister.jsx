import { useState } from "react";
import { Link } from "react-router-dom";

import "./sass_components/Form.scss";

const FormRegister = () => {
  const [stateUser, setStateUser] = useState(false);

  return (
    <div className="form">
      <form className="form-register">
        <input type="text" placeholder="Nome" name="name" />
        <input type="email" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirm-password"
        />
        <input type="submit" value="Cadastrar-se" />
        <Link>Ja tenho cadastro</Link>
      </form>
    </div>
  );
};

export default FormRegister;
