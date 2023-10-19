import { createContext, useContext, useState } from "react";

export const ContextUser = createContext();

export const ContextUserDataProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [userName,setUserName] = useState('')

  const setUserId = (id) => {
    setIdUser(id);
    localStorage.setItem('userId',JSON.stringify(id))
  };

  console.log(userName)

  localStorage.setItem('userLogged',JSON.stringify(userLogged))
  localStorage.setItem('userName',JSON.stringify(userName))

  
  return (
    <ContextUser.Provider
      value={{ idUser,setUserId,userLogged,setUserLogged,setUserName}}
    >
      {children}
    </ContextUser.Provider>
  );
};

export const ContextDataUser = () => {
  return useContext(ContextUser);
};
