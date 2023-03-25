/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react"
import "./PopUp.css"

export const PopUp=({value,onClickCategory})=>{
  
    const list = [
      {name:"new",value:"newest"},
      {name:"old",value:"relevance"}
    ];
    
    const [popUp,setPopUp] = useState(false);

    const catRef = useRef();

    useEffect(() => {
      const handleClickOutside = (event ) => {
        if (catRef.current && !event.composedPath().includes(catRef.current)) {
          setPopUp(false)
        }
      };
        document.body.addEventListener('click', handleClickOutside);
    
        return () => document.body.removeEventListener('click', handleClickOutside);
      
      },[])

    const handleClick = () => {
        setPopUp(!popUp);
    }
    
    let classNames = "dropdown-content";

    if(popUp){
        classNames+="_open"
    };
  
    return <div ref={catRef} className="dropdown">
  <button onClick={handleClick} className="dropbtn">Сортировать по : </button>

{popUp && ( <div className={classNames}>
    {list.map((item,i)=>(
    
    <a key={i} onClick={()=>onClickCategory(item.value)}  className={ value === item.value ? "dropdown_a-active" : "dropdown_a"}>{item.name}</a>
    ))}
</div>
)}
</div>
}




