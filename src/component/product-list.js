import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Audio } from 'react-loader-spinner'
import { addProductAction, productApiError, productListAction, productListing } from "../redux/products/action"

export const ProductListing =()=>{
    
    

    const dispatch=useDispatch()
    const producctDetails=useSelector(state=>state.productData)
    const [loader,setLoader]=useState(false)
    console.log(producctDetails)


    useEffect(()=>{

        loadProducts()
    },[])

    const loadProducts=()=>{

        dispatch(productListing(
            ()=>{
           alert("success")
        },
        ()=>{
            alert("error occurred")
        },
        ()=>{
            setLoader(true)

        },
        ()=>{
            setLoader(false)
        }
        
        
        
        ))
       

    }


    return(
        <>
        <h3>Products</h3>



        {


loader  ?

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>:
<h2>Products loaded</h2>
        }
        </>


     

     )



       
        

    
}

// redux-dev-tool-extension --->

// 0. Repeat the class 
// 1. Api handled by thunk 
// 2. add to cart , product increment , decrement 
// 3. add employee 
// 4. list of employess 
// 5. Delete employees 
// 6. Routing 
// 7. firebase for backend 




