const handleTickets = async (url, method, id = null) => {
  let response;

  if (method === "GET") {
    response = await fetch(url).then((resp) => resp.json());
  }
  return response;
};

const deleteTickets = async (url) => {
  try {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((resp) => resp.json());
  } catch (error) {
    console.log(error)
  }
};

const sendDataFromServer = async (url, data) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }

  
};

const getData = {
  handleTickets,
  sendDataFromServer,
  deleteTickets,
};

export default getData;
