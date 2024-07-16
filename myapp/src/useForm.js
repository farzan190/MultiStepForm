import { useContext, useState } from 'react';
import {GlobalContext} from './Context/GlobalContext';


//make a handleChange and a validator 

const useForm=()=>{
 const {formData,setFormData}=useContext(GlobalContext);
 const [errors,setErrors]=useState({});

const  handleChange=(event)=>{
   setFormData({...formData,[event.target.name]:event.target.value,});
   setErrors({...errors,[event.target.name]:"",}); 

}

const validate=()=>{
 let newErrors={};
for(let [field,value] of Object.entries(formData))
{
     if(!value)
    newErrors[field]=`${field.charAt(0).toUpperCase() + field.slice(1)}is required`;
 
   else if(field==="email"){
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        newErrors[field] = "Invalid email address";
      }}

    else if (field === "phone") {
        if (!/^\d{10}$/.test(value)) {
          newErrors[field] = "Invalid phone number";
        }
      }

}
setErrors(newErrors);
console.log(errors); // the object is empty hence isnt displaying any error 
return Object.keys(newErrors).length===0;
};

return {formData,handleChange,errors,validate};
     
}

export default useForm;




// we are passing the errors in the input field and als the error and its displaying it there but but we are first checking using the validate function and assigning the error 