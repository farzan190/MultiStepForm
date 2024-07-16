import {createContext} from "react"
import { useState } from "react";


export const GlobalContext=createContext();


 export const GlobalContent=({children})=>{

 const[formData,setFormData]=useState(
    {
        name:"",
        email:"",
        phone:"",

    }
 );
 

return <GlobalContext.Provider value={{formData,setFormData}}>{children}</GlobalContext.Provider>

}

// svg image and name and price based on month and year 

 


export default GlobalContent;