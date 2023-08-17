import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { validate } from "./validate/Validate";

import { sendDataUser } from "../slices/getTicketsSlices";

import "./sass_components/Form.scss";

const FormRegister = () => {
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.tickets);
  const urlServer = import.meta.env.VITE_URL_SERVER;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dataRegister = {
    name,
    email,
    password,
  };

  const dataRequest = {
    url: urlServer,
    dataUser: dataRegister,
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await validate(dataRegister);
    await dispatch(sendDataUser(dataRequest));
    resetInputs();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-register">
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          required
          value={name || ""}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password || ""}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          value={confirmPassword || ""}
        />
        {loading ? (
          <input type="submit" disabled value="Carregando..." />
        ) : (
          <input type="submit" value="Cadastrar-se" />
        )}
        <Link>Ja tenho cadastro</Link>
      </form>
    </div>
  );
};

export default FormRegister;
