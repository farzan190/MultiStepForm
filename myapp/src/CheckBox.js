import {GlobalContext} from "./Context/GlobalContext";
import { useContext } from "react";


const CheckBox=({options,value,setValue})=>{
  const {duration}=useContext(GlobalContext);

function handleChange({target}){
 if(target.checked){
    setValue([...value,target.value])
 }
 else{
    setValue(value.filter((item)=>item!==target.value));
 }


}



return (
<>
{options.map((option,index)=>{
 const isChecked=value.includes(option.name)
return (
<>
<input
 id={index}
 type="checkbox"
 value={option.name}
 checked={isChecked}
 onChange={handleChange}
/>
<div>
              <h2>{option.name}</h2>
              <p>{option.description}</p>
            </div>
            <span>
              {duration.length
                ? `+$${option.pricePerYear}/yr`
                : `+$${option.pricePerMonth}/mo`}
            </span>
</>
)
})}
</>
)
}



export default CheckBox;