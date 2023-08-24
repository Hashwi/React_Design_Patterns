import React,{useState, useEffect} from "react";
import axios from 'axios'

export const ResourceLoader = ({resourceUrl,resourceName, children}) => {
    const [state, setState] = useState(null)
    

    useEffect(()=>{
        (async ()=> {
            const response = await axios.get(resourceUrl)
            setState(response.data)
            console.log(response)
        })()
    },[ resourceUrl])
   

  return (
    <>
    {React.Children.map(children, child =>{
        if (React.isValidElement(child)){
            return React.cloneElement(child, {[resourceName]: state})
        }
        console.log(children)
        return child
    })}
    </>
  )
}
