import { createContext, useContext, useState } from "react";

export const ContextUser = createContext();

export const ContextUserDataProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  
  if(idUser){
    localStorage.setItem('idUser',JSON.stringify(idUser))
  }


  return (
    <ContextUser.Provider
      value={{ idUser,setIdUser,userLogged,setUserLogged}}
    >
      {children}
    </ContextUser.Provider>
  );
};

export const ContextDataUser = () => {
  return useContext(ContextUser);
};
