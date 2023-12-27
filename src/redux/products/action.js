import axios from "axios"
import { Reduxstore } from "../store"



// thunk : its middleware which returns the function instead of action 

// function : async calls 



   const dispatch =Reduxstore.dispatch

export const productListing =(success,failure,loadingStarted,stopLoader)=>{

    return async()=>{
        try{
            loadingStarted()
        dispatch({
            type:"API_STARTED"
        })

        axios.get("https://fakestoreapi.com/products").
        then(response=>{
            
            success()
            dispatch({
            type:"ALL_PRODUCTS_SUCCESS",
            payload:response.data
        })})
        .catch(response=>{

            failure()

            dispatch({
                type:"API_ERROR"
            })
        })
    }catch(err){
        console.log(err)
    }finally{
        console.log("finally")

        stopLoader()

    }
    }
}





// redux logger ---> we can log the action type and state change , previous state 


