import { useContext } from "react";
import {GlobalContext} from "./Context/GlobalContext";
import { ReactComponent as Arcade } from "./Assets/icon-arcade.svg";
import {ReactComponent as Advanced} from  "./Assets/icon-advanced.svg"
import {ReactComponent as Pro} from "./Assets/icon-pro.svg"
export const planOptions = [
    {
      Arcade: {
        monthPrice: 9,
        yearPrice: 90,
      },
    },
    {
      Advanced: {
        monthPrice: 12,
        yearPrice: 120,
      },
    },
    {
      Pro: {
        monthPrice: 15,
        yearPrice: 150,
      },
    },
  ];



  const PlanSelection=()=>{
    const {plan,setPlan,duration,setDuration}=useContext(GlobalContext);
    const isMonthly=duration[0]?false:true;
    const svgMapping={
          Arcade,
          Advanced,
          Pro,
    }

    const handleClick=({event})=>{
        setPlan(event.id);



    }
    
    return (<>
           {  
            planOptions.map((item)=>{
            const SvgComponent=svgMapping[Object.keys(item)];
            const isPlanSelected=  plan.includes(Object.keys(item));
            return <div
               onClick={handleClick}
             id={Object.keys(item)}
             key={Object.keys(item)}
             >
           <SvgComponent/>
           <div>
           <h2>{Object.keys(item)}</h2>
           { isMonthly? (<p>${item[Object.keys(item)].monthPrice}/mo</p>):(<><p>${item[Object.keys(item)].yearPrice}/yr</p><span>2 months free</span></>)}


           </div>



            </div>



            })


           }

           </>

    )
          
      


  }


  export default PlanSelection;