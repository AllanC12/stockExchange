import "./sass_pages/Login.scss";

import { useState } from "react";

import FormRegister from "../components/FormRegister";
import FormLogin from "../components/FormLogin";


const Login = () => {
  const [statusLogin] = useState(true);
  
  return (
    <div className="login">
      {statusLogin ? <FormLogin /> : <FormRegister />}
    </div>
  );
};

export default Login;
