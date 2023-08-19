import "./sass_pages/Login.scss";

import { useState } from "react";

import FormLogin from "../components/FormLogin";


const Login = () => {
  return (
    <div className="login">
      <FormLogin />
    </div>
  );
};

export default Login;
