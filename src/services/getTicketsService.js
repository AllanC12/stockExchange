const handleTickets = async (url,method,id = null) => {
  let response;

  if(method === 'GET'){
     response = await fetch(url).then((resp) => resp.json())
  }
  return response;

};

const deleteTickets = async (url,id) => {
 const response = await fetch(`${url}/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  }).then(resp => resp.json())

  return response
}

const sendDataFromServer = async (url,data) => {
  try{
    await fetch(url,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(data)
    })
  }catch(err){
    console.log(err)
  }
}


const getData = {
  handleTickets,
  sendDataFromServer,
  deleteTickets
};

export default getData;