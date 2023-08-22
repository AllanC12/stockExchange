import {useEffect,useState} from 'react'

import { getTickets } from '../slices/getTicketsSlices'

import Aside from '../components/Aside'

import { useDispatch } from 'react-redux'

const HomeBroker = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState(null)

  useEffect(() => {
    const searchTickets = async () => {
      let response = await dispatch(getTickets())
      setData(response)
    }
    searchTickets()
  },[])
  
  
  return (
    <div className="container_home">
      <Aside/>
    </div>
  )
}

export default HomeBroker