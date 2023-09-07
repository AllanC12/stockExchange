import { createContext,useContext,useState } from "react";

export const ContextUser = createContext()

export const ContextUserProvider = ({children}) => {
  
  const [idUser,setIdUser] = useState(null)
  
  const setUserId = (id) => {
    setIdUser(id)
  }

  return <ContextUser.Provider value={{setUserId}}>
    {children}
  </ContextUser.Provider>

}

export const MyContextDataUser = () => {
    return useContext(ContextUser)
}