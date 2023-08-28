import React from 'react'

const TicketsSaves = () => {
  const addressSave = "http://localhost:5173/home_broker/saves";
  
  return (
    <div className="tickets_saves">
      {location.href === addressSave && saves.length > 0 ? (
        saves.map((save) => <Ticket key={save.stock} stock={save} />)
      ) : (
        <p>Ainda não há itens salvos</p>
      )}
    </div>  
  )
}

export default TicketsSaves