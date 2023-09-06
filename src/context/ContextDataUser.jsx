import { createContext,useContext,useState } from "react";

export const ContextUser = createContext()

export const contextUserProvider = ({children}) => {
  
  const [idUser,setIdUser] = useState(null)

  const setUserId = (id) => {
    setIdUser(id)
  }

  const methodId = {
    setUserId
  }


  return <ContextUser.Provider value={methodId}>
    {children}
  </ContextUser.Provider>

}

export const MyContextDataUser = () => {
    return useContext(ContextUser)
}