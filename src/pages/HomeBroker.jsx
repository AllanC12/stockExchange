import {useEffect,useState} from 'react'

import { getTickets } from '../slices/getTicketsSlices'

import Aside from '../components/Aside'

import { useDispatch } from 'react-redux'

const HomeBroker = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState(null)

  useEffect(() => {
    const searchTickets = async () => {
      let data = await dispatch(getTickets())
      setData(data)
    }
    searchTickets()
  },[])
  
  
  return (
    <div>
      <Aside/>
    </div>
  )
}

export default HomeBroker