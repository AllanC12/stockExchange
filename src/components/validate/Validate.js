export const validate = async (dataUser, setUserRegistered) => {
  const keys = Object.keys(dataUser);
  let userRegistered = false;

  for (let i = 0; i < keys.length; i++) {
    if (dataUser[keys[i]] === "") {
      return;
    }
  }
  const emailUser = dataUser.email;
  const urlEmail = `${import.meta.env.VITE_URL_EMAIL}=${emailUser}`;
  const respEmail = await fetch(urlEmail).then((resp) => resp.json());

  for (const { email } of respEmail) {
    if (email) {
       setUserRegistered(true)
    }
  }

};

//criar função de verificação (se usuário ja registrado)
//validar dados 
