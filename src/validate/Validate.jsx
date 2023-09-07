 
export const getUserRegister = async (dataUser) => {
  const emailUser = dataUser.email;
  const urlEmail = `${import.meta.env.VITE_URL_EMAIL}=${emailUser}`;
  const resp = await fetch(urlEmail).then((resp) => resp.json());
  return resp
}

export const verifyUserRegister = async (dataUser, setMessage) => {
  const pageRegister = "http://localhost:5173/register";
  const pageLogin = "http://localhost:5173/"; 
  const respRegister = await getUserRegister(dataUser) 

  if (location.href === pageRegister) {
    if (respRegister.length > 0) {
      return true;
    }
  }

  if (location.href === pageLogin) {
    if (respRegister.length === 0) {
      setMessage("Verifique seu email");
      return true;
    }
  }

  if (respRegister.length === 0) {
    return;
  } else {
    if (respRegister[0].password === dataUser.password) {
      setMessage(`Olá ${respRegister[0].name}`);
    } else {
      setMessage("Verifique sua senha");
      return true;
    }
  }
};

export const validateUserRegister = (dataUser) => {
  const keys = Object.keys(dataUser);

  for (let i = 0; i < keys.length; i++) {
    if (dataUser[keys[i]] === "") {
      return false;
    } else if (dataUser.password !== dataUser.confirmPassword) {
      return false;
    } else {
      return true;
    }
  }
};
