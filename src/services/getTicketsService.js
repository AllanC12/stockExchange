
const getTickets = async (url) => {
  try {
    const response = await fetch(url)
      .then((resp) => resp.json())
      .catch((err) => err);
    return response;
  } catch (error) {
    console.log(error);
  }
};


const sendDataUser = async (url, data) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      }
    })
  } catch (error) {
    console.log(error)
  }
};


const sendTicketUser = async (url,ticket,idUser) => {
  try {
    await fetch(url,{
      method: 'POST',
      body: JSON.stringify(ticket,idUser),
      headers: {
        "content-type" : "application/json"
      }
    })
  } catch (error) {
    console.log(error)
  }
} 


const getData = {
  getTickets,
  sendDataUser,
  sendTicketUser
};

export default getData;