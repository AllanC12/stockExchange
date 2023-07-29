const getTickets = async (url) => {
 try {
   const response = await fetch(url).then(resp => resp.json()).catch(err => err)
   return response
 } catch (error) {
    console.log(error)
 }  
}

const getData = {
    getTickets
}

export default getData