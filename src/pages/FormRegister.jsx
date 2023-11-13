import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { validateUserRegister, verifyUserRegister } from "../validate/Validate";

import { sendDataUser } from "../slices/getTicketsSlices";

import "./sass_pages/Form.scss";

const FormRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const urlServer = "https://diligent-incredible-break.glitch.me/clients";
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dataRegister = {
    name,
    email,
    password,
    confirmPassword,
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

    let userRegistered = await verifyUserRegister(dataRegister,setMessage);
    let validatedUser = validateUserRegister(dataRegister);
 
    if (userRegistered) {
      userRegistered = false;
      return;
    }

    if (!validatedUser) {
      setMessage("As senhas precisam ser iguais");
      return;
    } else {
      setMessage(`Seja bem vindo(a) ${dataRegister.name}`);
    }

     await dispatch(sendDataUser(dataRequest));

    resetInputs();

    setTimeout(() => {
      setMessage("");
      navigate('/')
    }, 1500);
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

        <input type="submit" value="Cadastrar-se" />
        {message && <p className="message">{message}</p>}
        <Link to="/">Ja tenho cadastro</Link>
      </form>
    </div>
  );
};

export default FormRegister;
 