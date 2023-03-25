
import { useCallback, useState } from "react"
import {BsFillBasket2Fill} from "react-icons/bs"
import { useNavigate } from "react-router-dom"


import { CardMenu } from '../CardMenu/CardMenu'
import "./CardBlock.css";
import React from "react"
import { useSelector } from "react-redux";






export const CardBlock = () => {
  const [isCartMenuVisible,setisCartMenuVisible] = useState(false);
  const navigation = useNavigate()
  const items = useSelector((state)=>state.cart.itemsInCart)


  const handleClick= useCallback(()=>{
    setisCartMenuVisible(false)
    navigation(`/order`);
  },[navigation]);

  let classNames = ""
  if(items.length>0){
    classNames+="cart_circle"
  }



  return (
    <div className='cart'>
    <BsFillBasket2Fill onClick={()=>setisCartMenuVisible(!isCartMenuVisible)} className='cart_basket'/>
     <div className={classNames}><span>{items.length === 0 ? null : items.length}</span></div>
  
   {isCartMenuVisible ? <CardMenu items={items} order={handleClick}/> : null}
    </div>
  )
}

