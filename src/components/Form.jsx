import {useState} from "react"

import "./sass_components/Form.scss"

const Form = () => {
 const [stateUser,setStateUser] = useState(false)

  return (
    <div className="forms">
     {
       !stateUser ? (
        <form className="form-login">
           <input type="text" placeholder="Nome" name="name"/>
           <input type="email" placeholder="E-mail" name="email"/>
           <input type="password" placeholder="Senha" name="password"/>
           <input type="password" placeholder="Confirme a senha" name="confirm-password"/>
           <input type="submit" value="Cadastrar-se" />
        </form>
       ) : (
        <p>não logado</p>
       )
     }
    </div>
  )
}

export default Form