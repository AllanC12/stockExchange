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
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

  } catch (error) {
    console.log(error);
  }
};

const getData = {
  getTickets,
  sendDataUser
};

export default getData;
