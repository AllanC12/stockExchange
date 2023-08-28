import "./App.css"
import { Outlet } from 'react-router-dom'

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import {ContextUserDataProvider}  from "./context/Context"

function App() {

  return (
    <div className="App">
      <ContextUserDataProvider>
        <NavBar/>
         <Outlet/>
        <Footer/>
      </ContextUserDataProvider>
    </div>
  )
}

export default App
