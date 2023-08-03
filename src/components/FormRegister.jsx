import { useState } from "react";
import { Link } from "react-router-dom";

import "./sass_components/Form.scss";

const FormRegister = () => {
  const [stateUser, setStateUser] = useState(false);

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dataRegister = {
    id: Math.floor(Math.random() * 1000000),
    name,
    email,
    password,
    confirmPassword
  }

 const handleSubmit = (e) => {
  e.preventDefault()

 }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-register">
        <input 
        type="text" 
        placeholder="Nome" 
        onChange={(e) => setName(e.target.value)}
        required
        />
        <input 
        type="email" 
        placeholder="E-mail" 
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input 
        type="password" 
        placeholder="Senha" 
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input type="submit" value="Cadastrar-se" />
        <Link>Ja tenho cadastro</Link>
      </form>
    </div>
  );
};

export default FormRegister;
