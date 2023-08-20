import { useState } from "react";

import { Link } from "react-router-dom";

import "./sass_pages/Form.scss";

import { verifyUserRegister } from "../validate/Validate";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState('')

  const dataUser = {
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUserRegister(dataUser,setMessage)

  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-login">
        <input
          placeholder="Insira seu email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Insira sua senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Entrar" />
        {message && <p className="message">{message}</p>}
        <Link to="/register">Quero me cadastrar</Link>
      </form>
    </div>
  );
};

export default FormLogin;
