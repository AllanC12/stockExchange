import { createContext,useContext,useState } from "react";

export const ContextUser = createContext()

export const ContextUserDataProvider = ({children}) => {
  
  const [idUser,setIdUser] = useState(null)
   
  const setUserId = (id) => {
    setIdUser(id)
  }

  return <ContextUser.Provider value={{setUserId,idUser}}>
    {children}
  </ContextUser.Provider>

}

export const ContextDataUser = () => {
    return useContext(ContextUser)
}