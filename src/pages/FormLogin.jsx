import { useState } from "react";

import { Link,useNavigate} from "react-router-dom";

import "./sass_pages/Form.scss";

import { verifyUserRegister } from "../validate/Validate";


const FormLogin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState('')

  const dataUser = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userLogin = await verifyUserRegister(dataUser,setMessage)
    
    if(userLogin){
       return
    }
    
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