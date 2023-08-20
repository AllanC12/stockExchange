export const verifyUserRegister = async (dataUser) => {
  const emailUser = dataUser.email;
  const urlEmail = `${import.meta.env.VITE_URL_EMAIL}=${emailUser}`;
  const respEmail = await fetch(urlEmail).then((resp) => resp.json());

   if(respEmail.length > 0){
     return true
  }

}

export const validateUserRegister = (dataUser) => {
  const keys = Object.keys(dataUser);

  for (let i = 0; i < keys.length; i++) {
    if (dataUser[keys[i]] === "") {
      return false;
    }else if(dataUser.password !== dataUser.confirmPassword){
      return false
    }else{
      return true
    }
  }

};



