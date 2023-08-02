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
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = resp.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getData = {
  getTickets,
  sendDataUser
};

export default getData;
