import { createContext, useContext, useState,useEffect } from "react";

export const ContextUser = createContext();

export const ContextUserDataProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [userLogged, setUserLogged] = useState(false);

  const getUserData = () => {
    if(idUser){
      localStorage.setItem('idUser',JSON.stringify(idUser))
    }
  
    if(userLogged){
      localStorage.setItem('userLogged',JSON.stringify(userLogged))
    }

    console.log('executado')
  }

  const logout = () => {
    localStorage.clear()
    window.reload()
  }
  
  useEffect(() => {
    getUserData()
  },[idUser])


  return (
    <ContextUser.Provider
      value={{ idUser,setIdUser,userLogged,setUserLogged,logout}}
    >
      {children}
    </ContextUser.Provider>
  );
};

export const ContextDataUser = () => {
  return useContext(ContextUser);
};
