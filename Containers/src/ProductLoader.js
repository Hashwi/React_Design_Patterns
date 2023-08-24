import React,{useState, useEffect} from "react";
import axios from 'axios'

export const ProductLoader = ({productId, children}) => {
    const [product, setProduct] = useState(null)
    console.log(product)

    useEffect(()=>{
        (async ()=> {
            const response = await axios.get(`./products/${productId}`)
            setProduct(response.data)
            console.log(response)
        })()
    },[ productId])
    console.log(product)

  return (
    <>
    {React.Children.map(children, child =>{
        if (React.isValidElement(child)){
            return React.cloneElement(child, {product})
        }
        console.log(children)
        return child
    })}
    </>
  )
}
