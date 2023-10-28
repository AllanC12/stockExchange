import { useEffect } from "react";

import { createContext, useContext, useState } from "react";

import { useDispatch } from "react-redux";

import { sendTicketUserSlice, handleTickets,delTickets } from "../slices/getTicketsSlices";

export const TicketsUser = createContext();

export const ContextTicketsDataProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [itemAdded,setItemAdded] = useState(false)
  const [itemDeleted,setItemDeleted] = useState(0)
  const [ticketsHome,setTicketsHome] = useState(null)

  const [bag, setBag] = useState([]);
  const [saves, setSaves] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [bagByUser, setBagByUser] = useState([]);
  const [savedByUser, setSavedByUser] = useState([]);
  const [favoritesByUser, setFavoritesByUser] = useState([]);

 const [idUser] = useState(JSON.parse(localStorage.getItem('idUser')))

  const urlHome = import.meta.env.VITE_URL_API;
  const urlPortfolio = import.meta.env.VITE_URL_TICKETS_PORTFOLIO;
  const urlSaves = import.meta.env.VITE_URL_TICKETS_SAVES;
  const urlFavorite = import.meta.env.VITE_URL_TICKETS_FAVORITES;

  
  const urlBagUser = `${urlPortfolio}?idUser=${idUser}`;
  const urlSaveUser = `${urlSaves}?idUser=${idUser}`;
  const urlFavoriteUser = `${urlFavorite}?idUser=${idUser}`;
  
  const dataRequest = {
    url: "",
    stock: null,
    idUser,
  };

  const getTicketApi = async (url,setTickets) => {
    let response = await dispatch(handleTickets(url))
    setTickets(response)
  }

  const deleteTicketInServer = async (stock,url,urlForUser) => {
    const response = await dispatch(handleTickets(`${urlForUser}&stock.stock=${stock.stock}`))
    const id = await response.payload.length > 0 ? response.payload[0].id : null
    dispatch(delTickets(`${url}/${id}`))
    setItemDeleted(prevItem => prevItem + 1)
  }

   const addFunction = (stock, setStockAdd) => {
    setStockAdd((prevStockAdded) =>
    Array.from(new Set([...prevStockAdded, stock]))
    );
    setItemAdded(true)
  };
  
  const removeFunction = async (stock, setListStock,url,urlForUser) => {
   await setListStock((prevList) =>{
      console.log(prevList)
      return prevList.filter((item) => item.stock !== stock.stock)
    });
     await deleteTicketInServer(stock,url,urlForUser)
  };
  
  const getTicketByUser = async (url, setListTicket) => {
    let response =  await dispatch(handleTickets(url));
    setListTicket(response.payload);
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
    getTicketApi(urlHome,setTicketsHome)
    getTicketByUser(urlBagUser, setBagByUser);
    getTicketByUser(urlSaveUser, setSavedByUser);
    getTicketByUser(urlFavoriteUser, setFavoritesByUser)
  },[itemDeleted]);
  

  useEffect(() => {
    const updatePortfolio = async () => {
      if(itemAdded){
        await sendTicketFromServer(urlPortfolio, bag);
        setItemAdded(false)
      }
      await getTicketByUser(urlBagUser, setBagByUser);
    };
    updatePortfolio();
  }, [bag]);

  useEffect(() => {
    const updateSaves = async () => {
      if(itemAdded){
        await sendTicketFromServer(urlSaves, saves);
        setItemAdded(false)
      }
      await getTicketByUser(urlSaveUser, setSavedByUser);
    };
    updateSaves();
  }, [saves]);

  useEffect(() => {
    const updateFavorites = async () => {
      if(itemAdded){
        await sendTicketFromServer(urlFavorite, favorites);
        setItemAdded(false)
      }
      await getTicketByUser(urlFavoriteUser, setFavoritesByUser);
    };
    updateFavorites();
  }, [favorites]);


  const methods = {
    addFunction,
    removeFunction,
    getTicketByUser,

  };

  const setLists = {
    setBag,
    setSaves,
    setFavorites,
    setBagByUser,
    setSavedByUser,
    setFavoritesByUser,
   };

  const states = {
    bag,
    saves,
    favorites,
    bagByUser,
    savedByUser,
    favoritesByUser,
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
