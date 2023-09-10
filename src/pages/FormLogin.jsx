import { useState } from "react";

import { Link,useNavigate} from "react-router-dom";

import "./sass_pages/Form.scss";

import { makeLogin,getUserRegister } from "../validate/Validate";
import { ContextDataUser } from "../context/ContextDataUser";

const FormLogin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState('')

  const dataUser = {
    email,
    password,
  };

  const {setUserId} = ContextDataUser()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const respRegister = await getUserRegister(dataUser)
    const name = respRegister.length > 0 ? respRegister[0].name : ""
    const {id} = respRegister.length > 0 ? respRegister[0] : 0 

    setUserId(id)

    if(!id){
      setMessage("Usuário sem cadastro")
      return
    }

    makeLogin(dataUser,setMessage,name)

    
    setTimeout(() => {
      navigate('/home_broker')
    },2000)
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
