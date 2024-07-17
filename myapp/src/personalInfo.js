import { useContext } from 'react';
import {GlobalContext} from './Context/GlobalContext';
import Input from './/Input'
import useForm from './useForm';


const PersonalInfo=()=>{

    const {formData,setFormData}=useContext(GlobalContext);
    const { handleChange,errors,validate}=useForm();
    
    function handleSubmit(event) {
       event.preventDefault();
       if (validate()) {
         console.log("hallo");
       }
     }
   
   return(
   <>
     <form onSubmit={handleSubmit}>
    <Input
   type="text"
   name="name"
   value={formData.name}
   onChange={handleChange}
   placeholder="type your name"
   error={errors.name} // when we are assigning the error we are marking it like {name:"thisistheerror" ,email and phone etc }
   />
   <Input
   type="email"
   name="email"
   value={formData.email}
   onChange={handleChange}
   placeholder="type your email"
   error={errors.email}
   />
   <Input
   type="number"
   name="phone"
   value={formData.phone}
   onChange={handleChange}
   placeholder="type your phone"
   error={errors.phone}
   />
   
   </form>
   <button onClick={handleSubmit}>submit</button>
   </>)
   

}
export default PersonalInfo;