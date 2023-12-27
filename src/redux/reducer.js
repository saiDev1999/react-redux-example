




const salaar_movie_tickets_pvr={
    totalTickets:100,
    filledTickets:50,
    unfilledTickets:50,
    holdTickets:2
}

export const movieReducer=(state=salaar_movie_tickets_pvr,action)=>{
    switch(action.type){

        case "BUY_TICKET":

        return {...state,filledTickets:state.filledTickets+1,unfilledTickets:state.unfilledTickets-1}

        case "HOLD_TICKET":

        return {...state,holdTickets:state.holdTickets+1}

        default :
        return state


    }





}
