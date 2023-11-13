export const getUserRegister = async (dataUser) => {
  const emailUser = dataUser.email;
  const urlEmail = `https://diligent-incredible-break.glitch.me/clients?email=${emailUser}`;
  const resp = await fetch(urlEmail).then((resp) => resp.json());
  return resp;
};

export const makeLogin = async (dataUser, setMessage, name) => {
  const respRegister = await getUserRegister(dataUser);
  if (dataUser.email === respRegister[0].email) {
    if (dataUser.password === respRegister[0].password) {
      setMessage(`Seja bem vindo (a) ${name}`);
      console.log('ok')
      return true
    } else {
      setMessage("Senha incorreta");
      return false
    }
  } else {
    setMessage("Usuário ainda não cadastrado");
    return false
  }
};

export const verifyUserRegister = async (dataUser, setMessage) => {
  const respRegister = await getUserRegister(dataUser);
  const existEmail = respRegister.some((item) => item.email === dataUser.email);

  if (existEmail) {
    setMessage("Usuário ja cadastrado");
    return true;
  } else {
    return false;
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
