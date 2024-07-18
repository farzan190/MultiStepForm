import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";
import CheckBox from "./CheckBox";

export const options = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      pricePerMonth: 1,
      pricePerYear: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      pricePerMonth: 2,
      pricePerYear: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      pricePerMonth: 2,
      pricePerYear: 20,
    },
  ];


const AddOns=()=>{
  const {addOns,setAddOns}=useContext(GlobalContext);




    return (
 <div>
<CheckBox options={options} value={addOns} setValue={setAddOns}/>












    
 </div>














    )
}

export default AddOns;