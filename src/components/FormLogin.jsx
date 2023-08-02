import { useState } from "react";

import {Link} from "react-router-dom"

import "./sass_components/Form.scss";

const FormLogin = () => {
  return (
    <div className="form">
      <form className="form-login">
        <input placeholder="Insira seu email" type="email" name="email" />
        <input placeholder="Insira sua senha" type="password" name="passowrd" />
        <input type="submit" value="Entrar" />
        <Link>Quero me cadastrar</Link>
      </form>
    </div>
  );
};

export default FormLogin;
