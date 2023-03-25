/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../Redux/cart/reducer'


import "./CardInBasket.css"



const CardInBasket=({book})=>{

 const dispatch = useDispatch()
 
  const handleClick=(e:React.MouseEvent<HTMLDivElement>)=>{
   e.stopPropagation();
    dispatch(removeItemFromCart(book.id));

 };
  const imageBook = book.volumeInfo.imageLinks.smallThumbnail
  return (
    <div className='learn'>
       <div className='learn_wrapper'>
        <>
        <img className='learn_img' src={imageBook}/>
        </>
        <div className='learn_title'>{book.volumeInfo.title}</div>
  
        <div className='learn_btn' onClick={handleClick}>Убрать</div>

        </div>
       </div>
  )
}
export default CardInBasket