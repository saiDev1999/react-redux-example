

const initialState ={
    all_products : [],
    cart_products : [],
    products_load_sucess:false,
    error:null,
    api_call_started :false
}


const productReducer =(state=initialState,action)=>{
    switch(action.type){

      case "API_STARTED":

      return {...state,api_call_started:true}



        case "ALL_PRODUCTS_SUCCESS":


const  newArry=action.payload.map(callback)
function callback(ele){
    return {...ele,count:0}
}
        return {...state,all_products:newArry,products_load_sucess:true}

        case "API_ERROR":
        return {...state,error:"error occured"}
        case "ADD_TO_CART":
            return {...state,cart_products:["item10"]}
        default :
          return state
    }
}

export default productReducer