
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyTicketAction, holdTicketAction } from '../redux/action'

const MovieTickets = () => {
   const dispatch = useDispatch()

    const reduxState=useSelector(state=>state.movieData)
    const productsState=useSelector(state=>state.productData)
    console.log(productsState)

    const buyTicket=()=>{

        dispatch(buyTicketAction())


    }
    const holdTicket=()=>{

        dispatch(holdTicketAction())


    }

     
  return (
    <div>
        <h3>Total Tickets {reduxState.totalTickets}</h3>
        <h4>Filled Tickets {reduxState.filledTickets}</h4>
        <h4>Un-Filled Tickets {reduxState.unfilledTickets}</h4>
        <h4>Hold Tickets {reduxState.holdTickets}</h4>
        <button onClick={buyTicket} >Buy Ticket</button>
        <button onClick={holdTicket} >Hold Ticket</button>
    </div>
  )
}

export default MovieTickets

// useSelector ---> react-redux hook --> from redux to react -> data 

// useDispatch ---> react-redux hook --> communication btw react-redux