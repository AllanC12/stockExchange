const getTickets = async (url) => {
  const response = await fetch(url).then((resp) => resp.json());
  return response;
};

const sendDataUser = async (url, data) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const sendTicketUser = async (urlTicket, ticket, idUser) => {
  try {
    await fetch(urlTicket, {
      method: "POST",
      body: JSON.stringify(ticket, idUser),
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getData = {
  getTickets,
  sendDataUser,
  sendTicketUser,
};

export default getData;
