import React,{useState, useEffect} from "react";
import axios from 'axios'

export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(()=>{
        (async ()=> {
            const response = await axios.get(`./users/${userId}`)
            setUser(response.data)
            console.log(response)
        })()
    },[ userId])
    console.log(user)

  return (
    <>
    {React.Children.map(children, child =>{
        if (React.isValidElement(child)){
            return React.cloneElement(child, {user})
        }
        console.log(children)
        return child
    })}
    </>
  )
}
