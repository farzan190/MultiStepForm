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
 
const [duration,setDuration]=useState("");
const [plan,setPlan] =useState("Arcade");
const [addOns,setAddOns]=useState(["hellee"]);


return <GlobalContext.Provider value={{formData,setFormData,plan,setPlan,duration,setDuration,addOns,setAddOns}}>{children}</GlobalContext.Provider>

}



 


export default GlobalContent;