import { createContext,useContext,useState } from "react";

export const ContextUser = createContext()

export const contextUserProvider = ({children}) => {
    
    const [idUser,setIdUser] = useState(null)

    const setUserId = (id) => {
        console.log('ok')
      setIdUser(id)
    }

 
    return <ContextUser.Provider value={{setUserId}}>
      {children}
    </ContextUser.Provider>

}

export const MyContextDataUser = () => {
    return useContext(ContextUser)
}