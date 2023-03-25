import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, setItemInCart } from '../../Redux/cart/reducer.js';

import "./OpenFull.css"

export const OpenFullPage=()=>{
  const dispatch = useDispatch()
  const book = useSelector((state)=>state.book.currentGame);
  const [isItemIn,setIsItemIn] = useState(true)
  const handleClick=(e)=>{
    e.stopPropagation();
    if(isItemIn){
      dispatch(setItemInCart(book))
      setIsItemIn(false)
    }else{
      dispatch(removeItemFromCart(book.id));
     setIsItemIn(true)
    }
  };

  const imageBook =  book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className='open'>
    <h1 className='open_title'>{book.volumeInfo.title}</h1>
    <div className='open_content'>
      <div className='open_left'>
        <img alt="ввв" src={imageBook} className="open_frame" />

      </div>
      <div className='open_right'>
      <p className='open_aut'>{book.volumeInfo.authors}</p>
      <b className='open_description'>{book.volumeInfo.description}</b>
      <p className='open_tags'>Популярные метки этого продукта :</p>
      

    <button onClick={handleClick} className='open_price'>
    <span>{isItemIn ? ` Добавить за : ${1200} руб `: "Убрать из корзины "}</span>
    </button>
      </div>

    </div>

    </div>

  )
}