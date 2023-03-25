import React from 'react'
import CardInBasket from "../CardInBasket/CardInBasket.tsx"
import "./CardMenu.css"
export const CardMenu=(props)=>{
    const total=props.items.reduce((acc,game)=>acc+=game.price,0);
 
  return (
    <div className='more'>
    {props.items.length > 0 ? props.items.map((book)=> <CardInBasket book={book}/>) : <div className='more_empty'>Корзина пуста</div>}
   </div>
   
  )
}
