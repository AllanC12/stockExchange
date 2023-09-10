
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
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    }
  })
};


const sendTicketUser = async (url,ticket) => {
  try {
    await fetch(url,{
      method: 'POST',
      body: JSON.stringify(ticket),
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