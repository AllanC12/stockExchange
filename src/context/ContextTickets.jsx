import { useEffect } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import {
  sendTicketUserSlice,
  handleTickets,
  delTickets,
} from "../slices/getTicketsSlices";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [itemAdded, setItemAdded] = useState(false);
  const [ticketsHome, setTicketsHome] = useState(null);

  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);

  const [bagByUser, setBagByUser] = useState([]);
  const [savedByUser, setSavedByUser] = useState([]);

  const [idUser] = useState(JSON.parse(localStorage.getItem("idUser")));

  const urlHome = "https://brapi.dev/api/quote/list";
  const urlPortfolio = "https://diligent-incredible-break.glitch.me/tickets_portfolio";
  const urlSaves = "https://diligent-incredible-break.glitch.me/tickets_saves";

  const urlBagUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlSaveUser = `${urlSaves}?idUser=${idUser}`;

  const dataRequest = {
    url: "",
    stock: null,
    idUser,
  };
  const getTicketByUser = async (url, setListTicket) => {
    let response = await dispatch(handleTickets(url));
    setListTicket(response.payload);
  };

  const getTicketApi = async (url) => {
    let response = await dispatch(handleTickets(url));
    setTicketsHome(response);
  };

  const getAllTicketsByUser = async () => {
    await getTicketByUser(urlBagUser, setBagByUser);
    await getTicketByUser(urlSaveUser, setSavedByUser);
  };

  const deleteTicketInServer = async (stock, url, urlForUser) => {
    const response = await dispatch(
      handleTickets(`${urlForUser}&stock.stock=${stock.stock}`)
    );
    const id =
      (await response.payload.length) > 0 ? response.payload[0].id : null;
    await dispatch(delTickets(`${url}/${id}`));
    getAllTicketsByUser();
  };

  const addFunction = (stock, setStockAdd, target) => {
    let disabled = target.getAttribute("disabled");
    if (disabled) {
      disabled = false;
      return;
    }
    setStockAdd((prevStockAdded) =>
      Array.from(new Set([...prevStockAdded, stock]))
    );
    setItemAdded(true);
    target.setAttribute("disabled", true);
  };

  const removeFunction = async (stock, setListStock, url, urlForUser) => {
    await setListStock((prevList) => {
      return prevList.filter((item) => item.stock !== stock.stock);
    });
    await deleteTicketInServer(stock, url, urlForUser);
  };

  const sendTicketFromServer = async (url, arrayStock) => {
    if (arrayStock.length > 0) {
      await Promise.all(
        arrayStock.map((stock) => {
          dataRequest.url = url;
          dataRequest.stock = stock;
        })
      );

      await dispatch(sendTicketUserSlice(dataRequest));
    }
  };

  useEffect(() => {
    getTicketApi(urlHome);
    getAllTicketsByUser();
  }, [idUser]);

  useEffect(() => {
    const updatePortfolio = async () => {
      if (itemAdded) {
        await sendTicketFromServer(urlPortfolio, bag);
        setItemAdded(false);
      }
      await getTicketByUser(urlBagUser, setBagByUser);
    };
    updatePortfolio();
  }, [bag]);

  useEffect(() => {
    const updateSaves = async () => {
      if (itemAdded) {
        await sendTicketFromServer(urlSaves, saves);
        setItemAdded(false);
      }
      await getTicketByUser(urlSaveUser, setSavedByUser);
    };
    updateSaves();
  }, [saves]);

  const methods = {
    addFunction,
    removeFunction,
    getTicketByUser,
  };

  const setLists = {
    setBag,
    setSaves,
    setBagByUser,
    setSavedByUser,
  };

  const states = {
    bag,
    saves,
    bagByUser,
    savedByUser,
    ticketsHome,
  };

  const TicketsUserValue = {
    methods,
    setLists,
    states,
  };

  return (
    <TicketsUser.Provider value={TicketsUserValue}>
      {children}
    </TicketsUser.Provider>
  );
};

export const ContextTicketUser = () => {
  return useContext(TicketsUser);
};
