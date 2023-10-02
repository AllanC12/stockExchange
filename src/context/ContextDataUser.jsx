import { createContext,useContext,useState } from "react";

export const ContextUser = createContext()

export const ContextUserDataProvider = ({children}) => {
  
  const [idUser,setIdUser] = useState(null)

  const [userLogged,setUserLogged] = useState(false)

  console.log(userLogged)
   
  const setUserId = (id) => {
    setIdUser(id)
  }

  return <ContextUser.Provider value={{setUserId,idUser,setUserLogged,userLogged}}>
    {children}
  </ContextUser.Provider>

}

export const ContextDataUser = () => {
    return useContext(ContextUser)
}