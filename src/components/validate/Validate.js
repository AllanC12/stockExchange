export const validate = async (dataUser) => {
  const keys = Object.keys(dataUser);

  for (let i = 0; i < keys.length; i++) {
    if (dataUser[keys[i]] === "") {
      return;
  }

  const emailUser = dataUser.email
  const urlEmail = `${import.meta.env.VITE_URL_EMAIL}=${emailUser}`
  const respEmail = await fetch(urlEmail).then(resp => resp.json())

  for(const {email} of respEmail){
    if(email) 
      console.log('usuário cadastrado')
    return 
  }


 

  }

};
