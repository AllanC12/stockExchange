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
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());

    return response; 

};

const getData = {
  getTickets,
  sendDataUser
};

export default getData;
