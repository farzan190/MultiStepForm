


const input=({type,name,value,label,id,onChange,placeholder,error})=>{

return (
    <>
 <label >
 {error && <span>{error}</span>}
 </label>


<input
type={type}
name={name}
value={value}
onChange={onChange}
placeholder={placeholder}
/>
</>
)
};

export default input;




