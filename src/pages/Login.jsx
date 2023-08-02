import "./sass_pages/Login.scss"


import FormRegister from "../components/FormRegister"
import FormLogin from "../components/FormLogin"
 
const Login = () => {
  return (
    <div className="login">
      {/* <FormRegister/> */}
      <FormLogin/>
    </div>
  )
}

export default Login;
